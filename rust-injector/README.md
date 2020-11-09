# Experimental rust injector and node cli item spawner
It's lightning fast, you can use it over ssh, but it has some other issues. Once again I just made the cli, injector by iojonmbnmb.
```
(Pg)Up/Down: Select | ^Arrows: x,y | Enter: Spawn | ^W: Erase Word | ^C: Quit
   425: ENT_TYPE_ITEM_CLONEGUNSHOT
   565: ENT_TYPE_ITEM_WEBGUN
 > 566: ENT_TYPE_ITEM_SHOTGUN
   578: ENT_TYPE_ITEM_CLONEGUN
566 0,0 > item gun_
```
## Usage
Get https://rustup.rs/ and https://nodejs.org/. Start the game, go to camp and run:
```
cargo build
node cli
```
## TODO
You can't exit the game, too bad!
