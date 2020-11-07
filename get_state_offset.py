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
print(hex(state))
input("Press Enter to continue...")