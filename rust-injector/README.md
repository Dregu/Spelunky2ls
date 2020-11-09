# Experimental rust injector and node cli item spawner
It's lightning fast, you can use it over ssh, but it has some other issues<sup>[1](#foot1)</sup>. Once again I just made the cli, injector by iojonmbnmb.
```
(Pg)Up/Down: Select | ^Arrows: x,y | Enter: Spawn | ^W: Erase Word | ^C: Quit
   425: ITEM_CLONEGUNSHOT
   565: ITEM_WEBGUN
 > 566: ITEM_SHOTGUN
   578: ITEM_CLONEGUN
566 0,0 > item gun_
```
## Usage
Get https://rustup.rs/ and https://nodejs.org/. Start the game, go to camp and run:
```
cargo build
node cli
```
## Issues
<a name="foot1">1</a>: You can't exit the game. Too bad!
