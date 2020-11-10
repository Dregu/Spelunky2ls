# Spelunky Twols
Spelunky 2 tools for item spawning and exploration. Most of this awesome stuff is not made by me, I just compiled it here.

## Usage
  - Extract somewhere
    - (Optional) Extract the game assets with https://github.com/spelunky-fyi/modlunky2/ and run the scripts from `Spelunky 2/Mods/Extracted/Data` to show textures in gui
  - Run scripts after the game is running
  - I strongly suggest making an offline copy of your installation from `steamapps/common/Spelunky 2` somewhere else and installing Goldberg steam emulator along with it to not risk unlocking achievements falsely or cheating in dailies. Grab a copy from https://gitlab.com/Mr_Goldberg/goldberg_emulator/-/releases and follow the instructions for that.
    - TL;DR: Copy the steam_api64.dll from the zip to the offline game directory and create steam_appid.txt with the text 418530 in it
  - These scripts will try to hook any running executable with the name **Spel2\*.exe** so you can run this with old versions too (e.g. Spel2-1.12.1e.exe)

## rust-injector/
Console version with a minimal UI made with nodejs and rust. Executable available at https://github.com/Dregu/Spelunky2ls/releases/tag/1.0. **<- This is the one you should get if you're lost.** If you get an alert from Windows Defender [just allow it](https://imgur.com/a/jzv8og5).

## spawnserver.py
Spawn any item. Webgui at http://localhost:5000/ now with search function and keyboard navigation. Executable available at https://github.com/Dregu/Spelunky2ls/releases/tag/0.4. If you get an alert from Windows Defender [just allow it](https://imgur.com/a/jzv8og5).

## item.py
Ditto. `python item.py id`

## door.py
Spawns an exit at every entrance.

## jelly.py
Spawns a megajelly at every entrance. Fun!

## chaos.py
Testing different random events for twitch crowd control
