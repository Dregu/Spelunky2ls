# Spelunky Twols
Spelunky 2 tools for item spawning and exploration using the Spelunky 2 injector by iojon.

## [rust-injector](rust-injector)
Console version of the item spawner at https://github.com/spelunky-fyi/rust-injector with a minimal UI made with nodejs. Executable available at **[here](https://github.com/Dregu/Spelunky2ls/releases/latest)**. If you get an alert from SmartScreen [just allow it](https://imgur.com/a/jzv8og5). If your antivirus blocks it just throw the antivirus away too.

## Python scripts usage
  - Extract somewhere
    - (Optional) Extract the game assets with https://github.com/spelunky-fyi/modlunky2/ and run the scripts from `Spelunky 2/Mods/Extracted/Data` to show textures in gui
  - Run scripts after the game is running
  - I strongly suggest making an offline copy of your installation from `steamapps/common/Spelunky 2` somewhere else and installing Goldberg steam emulator along with it to not risk unlocking achievements falsely or cheating in dailies. Grab a copy from https://gitlab.com/Mr_Goldberg/goldberg_emulator/-/releases and follow the instructions for that.
    - TL;DR: Copy the steam_api64.dll from the zip to the offline game directory and create steam_appid.txt with the text 418530 in it
  - These scripts will try to hook any running executable with the name **Spel2\*.exe** so you can run this with old versions too (e.g. Spel2-1.12.1e.exe)
  
## spawnserver.py
Don't use this unless you really want to. I'm not updating it anymore. Rust-injector is better. Spawn any item. Webgui at http://localhost:5000/ now with search function and keyboard navigation. Executable available at [here](https://github.com/Dregu/Spelunky2ls/releases/tag/0.4). If you get an alert from SmartScreen [just allow it](https://imgur.com/a/jzv8og5). If your antivirus blocks it just throw the antivirus away too.

## item.py
Ditto. `python item.py id`

## door.py
Spawns an exit at every entrance.

## jelly.py
Spawns a megajelly at every entrance. Fun!

## chaos.py
Testing different random events for twitch crowd control
