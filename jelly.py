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
state = proc.r64(base + state)

_, layer_off = find('C6 80 58 44 06 00 01 ', -7, 'imm')
layer = proc.r64(state + layer_off)

def signed(x):
    return x if x & 0x80000000 == 0 else x - 0x100000000

inst, _ = find('BA B9 01 00 00', 1, 'off')
inst, _ = find('BA B9 01 00 00', 5, 'off', start=inst)
inst, _ = find('BA B9 01 00 00', 5, 'off', start=inst)
load_item, _ = find('E8', 1, 'off', start=inst)
load_item += signed(struct.unpack_from("<L", data, load_item + 1)[0]) + 5
load_item += delta
load_item += base

main_thread = proc.threads()[0]
print(hex(state + layer_off))
oldscreen = 0
oldplayer = 0
oldigt = 0
spawnid = 0

while True:
    _, items_off = find('33 D2 8B 41 28 01', -7, 'imm')
    items = proc.r64(state + items_off)

    player_index = proc.r8(items)
    size = proc.r8(items + 1)
    player = proc.r64(items + 8 + player_index * 8)

    screen = int.from_bytes(proc.read(state+0x10, 1), "little")
    igt = int.from_bytes(proc.read(state+0x60, 1), "little")

    if screen != 12:
        spawnid = 0
    if screen == 12 and (oldscreen in [11, 13] or igt == 1):
        spawnid = 312
    if spawnid != 0 and player != 0 and player != oldplayer:
        x, y = struct.unpack("<2f", proc.read(player + 0x40, 8))
        y+=4
        proc.run(rf"""
import ctypes
import sys
import os

def hook(name, *args):
    if name != 'ctypes.seh_exception':
        return

sys.addaudithook(hook)

class CriticalSection:
    def __enter__(self, *args):
        ctypes.windll.kernel32.SuspendThread({main_thread})

    def __exit__(self, *args):
        ctypes.windll.kernel32.ResumeThread({main_thread})

# load_item(state.layer[0], entity_name, x, y)
try:
    with CriticalSection():
        load_item = (ctypes.CFUNCTYPE(ctypes.c_void_p,
            ctypes.c_void_p,
            ctypes.c_int64,
            ctypes.c_float,
            ctypes.c_float))({load_item})
        instance = load_item({layer}, {spawnid}, {x}, {y})
except Exception as e:
    import os
    os.system("msg * \"%s\"" % e)
""".strip().encode())
        spawnid = 0
    oldplayer = player
    oldscreen = screen
    time.sleep(0.1)
