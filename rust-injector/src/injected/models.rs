use crate::search::{decode_pc, decode_imm, find_inst};
use byteorder::*;
use hex_literal::*;

pub struct Memory<'a> {
    pub mem: &'a [u8],
    pub exe: &'a [u8],
}

impl<'a> Memory<'a> {
    fn r64(&self, addr: usize) -> usize {
        LE::read_u64(&self.mem[addr..]) as usize
    }

    fn f32(&self, addr: usize) -> f32 {
        LE::read_f32(&self.mem[addr..])
    }
    fn u8(&self, addr: usize) -> u8 {
        LE::read_uint(&self.mem[addr..], 1) as u8
    }
}

pub struct State<'a> {
    memory: &'a Memory<'a>,
    location: usize,
    off_items: usize,
    off_layers: usize,
}

impl<'a> State<'a> {
    pub fn new(memory: &'a Memory, start: usize) -> State<'a> {
        // Global state pointer
        let location = decode_pc(
            memory.exe,
            find_inst(memory.exe, &hex!("83 78 0C 05 0F 85"), start) - 15,
        );
        // The offset of items field
        let off_items = decode_imm(
            memory.exe,
            find_inst(memory.exe, &hex!("33 D2 8B 41 28 01"), start) - 7
        ) as usize;
        let off_layers = decode_imm(
            memory.exe,
            find_inst(memory.exe, &hex!("C6 80 58 44 06 00 01 "), start) - 7
        ) as usize;
        State {
            memory,
            location,
            off_items,
            off_layers,
        }
    }

    fn ptr(&self) -> usize {
        LE::read_u64(&self.memory.exe[self.location..]) as usize
    }

    pub fn layer(&self, index: usize) -> usize {
        self.memory.r64(self.ptr() + self.off_layers + index * 8)
    }

    pub fn items(&self) -> Items {
        Items {
            memory: self.memory,
            pointer: self.memory.r64(self.ptr() + self.off_items),
        }
    }
}

pub struct Items<'a> {
    memory: &'a Memory<'a>,
    pointer: usize,
}

impl<'a> Items<'a> {
    pub fn player(&self, index: usize) -> Player {
        Player {
            memory: self.memory,
            pointer: self.memory.r64(self.pointer + 8 + index * 8),
        }
    }
}

pub struct Player<'a> {
    memory: &'a Memory<'a>,
    pointer: usize,
}

impl<'a> Player<'a> {
    pub fn position(&self) -> (f32, f32) {
        // "overlay" exists if player is riding something / etc
        let (mut x, mut y) = (0.0, 0.0);
        let overlay = self.pointer;
        if overlay != 0 {
            loop {
                let (_x, _y) = (
                    self.memory.f32(overlay + 0x40),
                    self.memory.f32(overlay + 0x44)
                );
                x += _x;
                y += _y;
                let overlay = self.memory.r64(overlay + 0x10);
                if overlay == 0 {
                    break;
                }
            }
        }
        (x, y)
    }
    pub fn layer(&self) -> usize {
        // "overlay" exists if player is riding something / etc
        let mut l: usize = 0;
        let overlay = self.pointer;
        if overlay != 0 {
            l = self.memory.u8(overlay + 0x98) as usize;
        }
        l
    }
}
