mod injector;
use injector::*;

/*use std::net::UdpSocket;
use std::str;
use std::str::FromStr;
fn main() {
    env_logger::Builder::new()
        .filter(None, log::LevelFilter::Debug)
        .init();
    let socket = UdpSocket::bind("127.0.0.1:5001").unwrap();
    loop {
        let mut buf = [0; 16];
        let (amt, src) = socket.recv_from(&mut buf).unwrap();
        let msg = str::from_utf8(&buf).unwrap();
        let numbers: Vec<String> = msg.split_whitespace().map(|s| s.parse().unwrap()).collect();
        let id: usize = numbers[0].parse().unwrap();
        let dx: f32 = numbers[1].parse().unwrap();
        let dy: f32 = numbers[2].parse().unwrap();
    }
}*/

fn main() {
    env_logger::Builder::new()
        .filter(None, log::LevelFilter::Debug)
        .init();

    let path = std::env::current_exe()
        .unwrap()
        .parent()
        .unwrap()
        .join("injected.dll");

    if !path.exists() {
        log::error!("DLL not found! {}", path.to_str().unwrap());
        return;
    }

    let (_, temp_path) = tempfile::Builder::new()
        .suffix(".dll")
        .tempfile()
        .unwrap()
        .keep()
        .unwrap();

    match std::fs::copy(path, temp_path.clone()) {
        Err(_) => panic!("Error!"),
        Ok(_) => {}
    }

    unsafe {
        match find_process("Spel2.exe") {
            None => println!("Cannot find process!"),
            Some(proc) => {
                log::info!("Found spelunky 2 PID: {}", proc.pid);
                inject_dll(&proc, temp_path.to_str().unwrap());
            }
        }
    }
}