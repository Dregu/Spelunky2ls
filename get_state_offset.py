import struct
import time
import sys
from injectlib import Injector

def find(sep, offset=-7, type='pc', start=0):
    off = data.find(bytes.fromhex(sep), start)
    if type == 'off':
        return off + offset, None
    inst = data[off + offset:off]
    off2, = struct.unpack_from("<L", inst, 3)
    if type == 'imm':
        gm = off2
    elif type == 'pc':
        gm = off + offset + 7 + off2 + delta
    return off + delta, gm

proc = Injector.from_name_re('Spel2.*\.exe')
base = proc.find_base_re('Spel2.*\.exe')

target = proc.proc.cmdline()[0]
data = open(target, 'rb').read()
delta = 0xc00

_, state = find('83 78 0C 05 0F 85 ', -15)
offsets = [
    ['int counter', '-192'],
    ['byte screen', '0x10'],
    ['byte loading', '0x14'],
    ['byte trans', '0x28'],
    ['bool ingame', '0x30'],
    ['bool playing', '0x31'],
    ['byte pause', '0x32'],
    ['int igt', '0x60'],
    ['byte world', '0x65'],
    ['byte level', '0x66'],
    ['float x', '0x1298, 0x8, 0x40'],
    ['float y', '0x1298, 0x8, 0x44'],
    ['byte door',  '0x1298, 0x8, 0x114'],
    ['byte health', '0x1298, 0x8, 0x10f'],
    ['byte bombs', '0x1298, 0x2c'],
    ['byte ropes', '0x1298, 0x2d']
]
print('state("Spel2", "")')
print('{')
for i in offsets:
    print("  {} : {}, {};".format(i[0], hex(state), i[1]))
print("  byte255 savedata : {}, 0x18, 0, 0;".format(hex(state-72)))
print('}')
input("Press Enter to continue...")
