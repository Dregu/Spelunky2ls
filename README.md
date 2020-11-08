# Spelunky Twols
Spelunky 2 tools for item spawning and exploration. Most of this awesome stuff is not made by me, I just compiled it here.

## Usage
  - Extract somewhere
    - (Optional) Extract the game assets with https://github.com/spelunky-fyi/modlunky2/ and run the scripts from `Spelunky 2/Mods/Extracted/Data` to show textures in gui
  - Run scripts after the game is running
  - I suggest making a copy of your installation from `steamapps/common/Spelunky 2` somewhere else and installing Goldberg steam emulator along with it to run the game offline and not get achievements. Grab a copy from https://gitlab.com/Mr_Goldberg/goldberg_emulator/-/releases and follow the instructions for that.
    - TL;DR: Copy the steam_api64.dll from the zip to the offline game directory and create steam_appid.txt with the text 418530 in it

## spawnserver.py
Spawn any item. Webgui at http://localhost:5000/ now with search function and keyboard navigation

## item.py
Ditto. `python item.py id`

## door.py
Spawns an exit at every entrance.

## jelly.py
Spawns a megajelly at every entrance. Fun!

## chaos.py
Testing different random events for twitch crowd control
