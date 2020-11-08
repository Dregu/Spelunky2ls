# Experimental rust injector and node cli
It's lightning fast, you can use it over ssh, but it has some other issues. Once again I just made the cli, injector by iojonmbnmb.
```
Arrows = Select | ^Arrows = x,y | Enter = Spawn | ^W Erase Word | ^C Quit
   502: ENT_TYPE_ITEM_PICKUP_ROPE
   503: ENT_TYPE_ITEM_PICKUP_ROPEPILE
   506: ENT_TYPE_ITEM_PICKUP_ROYALJELLY
 > 525: ENT_TYPE_ITEM_PICKUP_CROWN
   526: ENT_TYPE_ITEM_PICKUP_EGGPLANTCROWN
   527: ENT_TYPE_ITEM_PICKUP_TRUECROWN
525 0,0 > pickup ro_
```
## Usage
Get https://rustup.rs/ and https://nodejs.org/. Start the game, go to camp and run:
```
cargo build
node cli
```
## TODO
You can't exit the game, too bad!
