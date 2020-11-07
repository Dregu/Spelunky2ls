import struct
import time
import sys
from injectlib import Injector
from cgi import parse_header, parse_multipart
from http.server import SimpleHTTPRequestHandler, BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs

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

inst, _ = find('BA 88 02 00 00', 1, 'off')
load_item, _ = find('BA 88 02 00 00', 8, 'off', start=inst)
load_item += signed(struct.unpack_from("<L", data, load_item + 1)[0]) + 5
load_item += delta
load_item += base

main_thread = proc.threads()[0]
print(hex(state + layer_off))

class Handler(SimpleHTTPRequestHandler):
    def parse_POST(self):
        ctype, pdict = parse_header(self.headers['content-type'])
        if ctype == 'multipart/form-data':
            postvars = parse_multipart(self.rfile, pdict)
        elif ctype == 'application/x-www-form-urlencoded':
            length = int(self.headers['content-length'])
            postvars = parse_qs(
                    self.rfile.read(length), 
                    keep_blank_values=1)
        else:
            postvars = {}
        return postvars

    def do_POST(self):
        postvars = self.parse_POST()
        print(postvars)

        _, items_off = find('33 D2 8B 41 28 01', -7, 'imm')
        items = proc.r64(state + items_off)

        player_index = proc.r8(items)
        size = proc.r8(items + 1)
        player = proc.r64(items + 8 + player_index * 8)

        # Player X, Y
        x, y = struct.unpack("<2f", proc.read(player + 0x40, 8))

        x += int(postvars[b'x'][0])
        y += int(postvars[b'y'][0])
        spawnid = int(postvars[b'id'][0])

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

server = HTTPServer(('', 5000), Handler)
server.serve_forever()