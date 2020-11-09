# Console nodejs+rust item spawner
It's lightning fast and you can use it over ssh. Once again I just made the cli, injector by iojonmbnmb.
<pre>
(Pg)Up/Down: Select | ^Arrows: x,y | Enter: Spawn | ^W: Erase Word | ^C: Quit
   425: ITEM_CLONEGUNSHOT
   565: ITEM_WEBGUN
<b> &gt; 566: ITEM_SHOTGUN</b>
   578: ITEM_CLONEGUN
566 0,0 > item gun_
</pre>
## Usage
### Binary
https://github.com/Dregu/Spelunky2ls/releases/tag/1.0

Extract all and run spelunky2ls-cli.exe.
### From source
Install https://rustup.rs/ and https://nodejs.org/ (you'll want to check the build tools during installation too). Extract the rust project somewhere and run in `cmd`:
```
cd c:\where\ever\you\extracted\rust-injector\
cargo build
copy target\debug\injector.exe .
copy target\debug\injected.dll .
node cli
```
You can now start the game before or after running the cli or even restart the game and it should get injected all the same...
