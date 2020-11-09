mod critical_section;
mod models;
mod search;

use byteorder::*;
use critical_section::CriticalSectionManager;
use hex_literal::*;
use models::{Memory, State};
use search::{find_after_bundle, find_inst};
use std::ffi::CString;
use std::process::Command;
use std::ptr;
use winapi::um::libloaderapi::LoadLibraryA;
use winapi::um::winnt::DLL_PROCESS_ATTACH;
use std::net::UdpSocket;
use std::str;

#[no_mangle]
unsafe extern "C" fn DllMain(_: *const u8, reason: u32, _: *const u8) -> bool {
    match reason {
        DLL_PROCESS_ATTACH => {
            set_panic_hook();
            std::thread::spawn(|| {main();});
        }
        _ => {}
    }
    true
}

fn message(payload: String) {
    Command::new("msg").arg("*").arg(payload).output().unwrap();
}

fn set_panic_hook() {
    std::panic::set_hook(Box::new(|info| {
        if let Some(s) = info.payload().downcast_ref::<&str>() {
            message(format!("{}", s));
        }
    }))
}

unsafe fn memory_view<'a>(addr: *mut u8) -> &'a mut [u8] {
    std::slice::from_raw_parts_mut(addr, usize::MAX)
}

fn get_load_item(exe: &[u8], start: usize) -> usize {
    let needle = &hex!("BA 88 02 00 00");
    let off = find_inst(exe, needle, start);
    let off: usize = find_inst(exe, needle, off + 5) + 8;

    off.wrapping_add(LE::read_i32(&exe[off + 1..]) as usize) + 5
}

pub unsafe fn main() {
    let spel2_name = CString::new("Spel2.exe").unwrap();
    let spel2_ptr = LoadLibraryA(spel2_name.as_ptr());
    let exe = memory_view(std::mem::transmute(spel2_ptr));
    let mem = memory_view(std::ptr::null_mut());

    // Skipping bundle for faster memory search
    let after_bundle = find_after_bundle(exe);

    let memory = Memory { mem, exe };
    let state = State::new(&memory, after_bundle);

    let load_item: extern "C" fn(usize, usize, f32, f32) -> usize =
        std::mem::transmute(get_load_item(exe, after_bundle) + spel2_ptr as usize);

    let socket = UdpSocket::bind("0.0.0.0:5001").unwrap();
    loop {
        let mut buf = [0; 16];
        let (_amt, _src) = socket.recv_from(&mut buf).unwrap();
        let msg = str::from_utf8(&buf).unwrap();
        let numbers: Vec<String> = msg.split_whitespace().map(|s| s.parse().unwrap()).collect();
        let id: usize = numbers[0].parse().unwrap();
        let dx: f32 = numbers[1].parse().unwrap();
        let dy: f32 = numbers[2].parse().unwrap();

        let c = CriticalSectionManager::new();
        {
            // This is RAII-style implementation for suspending the main thread, for preventing race conditions.
            let mut _lock = c.lock();
            let (x, y) = state.items().player(0).position();
            if x != 0.0 && y != 0.0 {
                load_item(state.layer(0), id, x+dx, y+dy);
            }
        }
    }
}

// Prevent compiler to skip return values for DllMain
pub unsafe fn eyo() {
    println!("{}", DllMain(ptr::null(), 0, ptr::null()));
}