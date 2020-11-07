const blocks = {
  "chunk_ground": 1,
  "chunk_air": 2,
  "chunk_door": 3,
  "empty": 0,
  "floor": 4,
  "nonreplaceable_floor": 5,
  "bone_block": 6,
  "bush_block": 7,
  "surface_floor": 8,
  "surface_hidden_floor": 9,
  "jungle_floor": 10,
  "styled_floor": 11,
  "minewood_floor": 12,
  "minewood_floor_noreplace": 13,
  "minewood_floor_hanging_hide": 14,
  "stone_floor": 15,
  "temple_floor": 16,
  "pagoda_floor": 17,
  "babylon_floor": 18,
  "nonreplaceable_babylon_floor": 19,
  "sunken_floor": 20,
  "beehive_floor": 21,
  "vlad_floor": 22,
  "cog_floor": 23,
  "mothership_floor": 24,
  "duat_floor": 25,
  "palace_floor": 26,
  "guts_floor": 27,
  "floor_hard": 28,
  "adjacent_floor": 29,
  "tomb_floor": 30,
  "regenerating_block": 31,
  "ladder": 32,
  "ladder_plat": 33,
  "vine": 34,
  "growable_vine": 35,
  "climbing_pole": 36,
  "growable_climbing_pole": 37,
  "platform": 38,
  "pagoda_platform": 39,
  "entrance": 40,
  "entrance_shortcut": 41,
  "exit": 42,
  "door": 43,
  "starting_exit": 44,
  "door2": 45,
  "door2_secret": 46,
  "door_drop_held": 47,
  "ghist_door2": 48,
  "locked_door": 49,
  "dm_spawn_point": 50,
  "spikes": 51,
  "upsidedown_spikes": 52,
  "push_block": 53,
  "powder_keg": 54,
  "arrow_trap": 55,
  "thorn_vine": 56,
  "jungle_spear_trap": 57,
  "falling_platform": 58,
  "chainandblocks_ceiling": 59,
  "chain_ceiling": 60,
  "conveyorbelt_left": 61,
  "conveyorbelt_right": 62,
  "factory_generator": 63,
  "crushtrap": 64,
  "crushtraplarge": 65,
  "quicksand": 66,
  "timed_powder_keg": 67,
  "elevator": 68,
  "timed_forcefield": 69,
  "forcefield_top": 70,
  "ushabti": 71,
  "construction_sign": 72,
  "singlebed": 73,
  "dresser": 74,
  "bunkbed": 75,
  "diningtable": 76,
  "sidetable": 77,
  "chair_looking_left": 78,
  "chair_looking_right": 79,
  "couch": 80,
  "tv": 81,
  "dog_sign": 82,
  "shortcut_station_banner": 83,
  "telescope": 84,
  "treasure": 87,
  "treasure_chest": 88,
  "treasure_vaultchest": 89,
  "potofgold": 90,
  "goldbars": 91,
  "crate": 92,
  "crate_bombs": 93,
  "crate_ropes": 94,
  "crate_parachute": 95,
  "rock": 96,
  "littorch": 97,
  "walltorch": 98,
  "litwalltorch": 99,
  "autowalltorch": 100,
  "lockedchest": 101,
  "tree_base": 102,
  "mushroom_base": 103,
  "turkey": 104,
  "cooked_turkey": 105,
  "royal_jelly": 106,
  "clover": 107,
  "pot": 108,
  "cursed_pot": 109,
  "haunted_corpse": 110,
  "empty_mech": 111,
  "snap_trap": 112,
  "snake": 113,
  "caveman": 114,
  "caveman_asleep": 115,
  "scorpion": 116,
  "cavemanboss": 117,
  "tikiman": 118,
  "witchdoctor": 119,
  "mantrap": 120,
  "mosquito": 121,
  "giant_spider": 122,
  "robot": 123,
  "imp": 124,
  "lavamander": 125,
  "vlad": 126,
  "crown_statue": 127,
  "olmec": 128,
  "pillar": 129,
  "anubis": 130,
  "crocman": 131,
  "cobra": 132,
  "mummy": 133,
  "sorceress": 134,
  "catmummy": 135,
  "necromancer": 136,
  "leprechaun": 137,
  "jiangshi": 138,
  "octopus": 139,
  "hermitcrab": 140,
  "giantclam": 141,
  "fountain_head": 142,
  "fountain_drain": 143,
  "kingu": 144,
  "slidingwall_switch": 145,
  "slidingwall_ceiling": 146,
  "ufo": 147,
  "alien": 148,
  "landmine": 149,
  "yeti": 150,
  "spring_trap": 151,
  "icefloor": 152,
  "thinice": 153,
  "alienqueen": 154,
  "shopkeeper_vat": 155,
  "alien_generator": 156,
  "eggplant_altar": 157,
  "moai_statue": 158,
  "eggplant_child": 159,
  "empress_grave": 160,
  "lamassu": 161,
  "laser_trap": 162,
  "spark_trap": 163,
  "olmite": 164,
  "zoo_exhibit": 165,
  "palace_entrance": 166,
  "palace_table": 167,
  "palace_table_tray": 168,
  "palace_chandelier": 169,
  "palace_candle": 170,
  "palace_bookcase": 171,
  "tiamat": 172,
  "olmecship": 173,
  "ammit": 174,
  "pipe": 175,
  "bigspear_trap": 176,
  "sticky_trap": 177,
  "mother_statue": 178,
  "eggplant_door": 179,
  "giant_frog": 180,
  "jumpdog": 181,
  "yama": 182,
  "crushing_elevator": 183,
  "altar": 184,
  "idol": 185,
  "idol_floor": 186,
  "idol_hold": 187,
  "storage_floor": 188,
  "woodenlog_trap": 189,
  "woodenlog_trap_ceiling": 190,
  "cookfire": 191,
  "drill": 192,
  "udjat_socket": 193,
  "vault_wall": 194,
  "coffin": 195,
  "ankh": 196,
  "excalibur_stone": 197,
  "honey_upwards": 198,
  "honey_downwards": 199,
  "mattock": 200,
  "crossbow": 201,
  "key": 202,
  "plasma_cannon": 203,
  "houyibow": 204,
  "lightarrow": 205,
  "shop_door": 206,
  "shop_sign": 207,
  "lamp_hang": 208,
  "shop_wall": 209,
  "shop_woodwall": 210,
  "shop_pagodawall": 211,
  "wanted_poster": 212,
  "shopkeeper": 213,
  "die": 214,
  "merchant": 215,
  "forcefield": 216,
  "challenge_waitroom": 217,
  "cavemanshopkeeper": 218,
  "ghist_shopkeeper": 219,
  "shop_item": 220,
  "sleeping_hiredhand": 221,
  "yang": 222,
  "pen_floor": 223,
  "pen_locked_door": 224,
  "sister": 225,
  "oldhunter": 226,
  "thief": 227,
  "madametusk": 228,
  "bodyguard": 229,
  "storage_guy": 230,
  "water": 231,
  "coarse_water": 232,
  "lava": 233,
  "stagnant_lava": 234
}

const items = {
  "entrance": 5,
  "entrance_drop": 6,
  "exit": 7,
  "exit_notop": 8,
  "side": 0,
  "path_normal": 1,
  "path_notop": 3,
  "path_drop": 2,
  "path_drop_notop": 4,
  "solid": 21,
  "altar": 114,
  "idol": 115,
  "idol_top": 116,
  "vault": 23,
  "posse": 24,
  "coffin_player": 25,
  "coffin_player_vertical": 26,
  "coffin_unlockable": 27,
  "coffin_unlockable_left": 28,
  "shop": 65,
  "shop_left": 66,
  "shop_attic": 71,
  "shop_attic_left": 72,
  "shop_entrance_up": 67,
  "shop_entrance_up_left": 68,
  "shop_entrance_down": 69,
  "shop_entrance_down_left": 70,
  "shop_basement": 73,
  "shop_basement_left": 74,
  "diceshop": 75,
  "diceshop_left": 76,
  "curioshop": 77,
  "curioshop_left": 78,
  "cavemanshop": 79,
  "cavemanshop_left": 80,
  "ghistshop": 134,
  "empress_grave": 135,
  "tuskdiceshop": 83,
  "tuskdiceshop_left": 84,
  "storage_room": 117,
  "challenge_entrance": 81,
  "challenge_entrance_left": 82,
  "challenge_bottom": 91,
  "challenge_0-0": 92,
  "challenge_0-1": 93,
  "challenge_0-2": 94,
  "challenge_0-3": 95,
  "challenge_1-0": 96,
  "challenge_1-1": 97,
  "challenge_1-2": 98,
  "challenge_1-3": 99,
  "challenge_special": 100,
  "machine_bigroom_path": 102,
  "machine_bigroom_side": 103,
  "feeling_factory": 104,
  "feeling_prison": 105,
  "feeling_tomb": 106,
  "machine_wideroom_path": 107,
  "machine_wideroom_side": 108,
  "machine_tallroom_path": 109,
  "machine_tallroom_side": 110,
  "machine_keyroom": 112,
  "machine_rewardroom": 113,
  "room2": 10,
  "passage_horz": 11,
  "passage_vert": 12,
  "passage_turn": 13,
  "beehive": 31,
  "beehive_entrance": 32,
  "udjatentrance": 29,
  "udjattop": 30,
  "blackmarket_entrance": 33,
  "blackmarket_coffin": 34,
  "blackmarket_exit": 35,
  "vlad_drill": 119,
  "vlad_entrance": 120,
  "vlad_bottom_tunnel": 121,
  "vlad_bottom_exit": 122,
  "vlad_tunnel": 123,
  "cog_altar_top": 124,
  "mothership_entrance": 40,
  "mothership_exit": 126,
  "mothership_coffin": 41,
  "apep": 127,
  "lake_exit": 128,
  "lake_normal": 129,
  "lake_notop": 130,
  "abzu_backdoor": 131,
  "anubis_room": 38,
  "moai": 39,
  "lakeoffire_back_entrance": 36,
  "lakeoffire_back_exit": 37,
  "ushabti_entrance": 132,
  "ushabti_room": 133,
  "olmecship_room": 42,
  "motherstatue_room": 43,
  "pen_room": 45,
  "sisters_room": 46,
  "oldhunter_keyroom": 136,
  "oldhunter_rewardroom": 137,
  "oldhunter_cursedroom": 138,
  "quest_thief1": 139,
  "quest_thief2": 140,
  "tuskfrontdiceshop": 47,
  "tuskfrontdiceshop_left": 48,
  "palaceofpleasure_0-0": 49,
  "palaceofpleasure_0-1": 50,
  "palaceofpleasure_0-2": 51,
  "palaceofpleasure_1-0": 52,
  "palaceofpleasure_1-1": 53,
  "palaceofpleasure_1-2": 54,
  "palaceofpleasure_2-0": 55,
  "palaceofpleasure_2-1": 56,
  "palaceofpleasure_2-2": 57,
  "palaceofpleasure_3-0": 58,
  "palaceofpleasure_3-1": 59,
  "palaceofpleasure_3-2": 60,
  "crashedship_entrance": 61,
  "crashedship_entrance_notop": 62,
  "chunk_door": 18,
  "chunk_ground": 16,
  "chunk_air": 17,
  "cache": 14,
  "ghistroom": 15
}
for (let i = 0; i < 0xF; ++i) {
  for (let j = 0; j < 8; ++j) {
    items[`setroom${i}-${j}`] = 141;
  }
}
const bestiary = {
  "snake": 219,
  "bat": 223,
  "caveman": 224,
  "spider": 220,
  "hangspider": 221,
  "giantspider": 222,
  "hornedlizard": 229,
  "mole": 230,
  "critterdungbeetle": 330,
  "mantrap": 232,
  "tikiman": 233,
  "witchdoctor": 234,
  "mosquito": 236,
  "monkey": 237,
  "critterbutterfly": 331,
  "robot": 239,
  "firebug": 240,
  "imp": 242,
  "lavamander": 243,
  "vampire": 244,
  "crittersnail": 332,
  "crocman": 246,
  "cobra": 247,
  "sorceress": 249,
  "cat": 250,
  "necromancer": 251,
  "leprechaun": 309,
  "critterlocust": 336,
  "jiangshi": 259,
  "fish": 261,
  "octopus": 262,
  "hermitcrab": 263,
  "female_jiangshi": 260,
  "crabman": 310,
  "critterfish": 333,
  "critteranchovy": 334,
  "crittercrab": 335,
  "ufo": 265,
  "landmine": 438,
  "springtrap": 73,
  "yeti": 267,
  "critterpenguin": 337,
  "critterfirefly": 338,
  "olmite": 275,
  "critterdrone": 339,
  "frog": 282,
  "firefrog": 283,
  "tadpole": 286,
  "giantfly": 287,
  "critterslime": 340,
  "bee": 277,
};
const chances = {
  "arrowtrap_chance": 0,
  "totemtrap_chance": 1,
  "pushblock_chance": 2,
  "snap_trap_chance": 3,
  "jungle_spear_trap_chance": 4,
  "spike_ball_chance": 5,
  "chain_blocks_chance": 6,
  "crusher_trap_chance": 7,
  "liontrap_chance": 8,
  "lasertrap_chance": 9,
  "sparktrap_chance": 10,
  "bigspeartrap_chance": 11,
  "stickytrap_chance": 12,
  "skulldrop_chance": 13,
  "eggsac_chance": 14,
  "minister_chance": 15,
  "beehive_chance": 16,
  "leprechaun_chance": 17
}

const textures = {};
const texture_cache = {};
const image_cache = {};
function AddTextures(category, code, path, tWidth, tHeight, width, height, x, y, _width, _height) {
  textures[code] = [path, tWidth, tHeight, width, height, x, y, _width, _height]
}

class Texture {
  constructor(img, x, y, width, height, tWidth, tHeight) {
    [this.img, this.x, this.y, this.width, this.height, this.tWidth, this.tHeight] = [img, x, y, width, height, tWidth, tHeight];
  }

  draw(ctx, x, y, sx, sy) {
    ctx.drawImage(this.img, this.x + sx, this.y + sy, this.width, this.height, x, y, this.width, this.height);
  }
};

async function LoadTexture(code) {
  let cache;
  if (cache = texture_cache[code])
    return cache;

  if (!textures[code])
    return;

  const [path, tWidth, tHeight, w, h, x, y, _width, _height] = textures[code];
  const img = await loadPath(path);
  cache = texture_cache[code] = new Texture(img, x, y,
    w,
    h,
    tWidth, tHeight);
  return cache;
}

function loadPath(path) {
  return new Promise((resolve, reject) => {
    if (!image_cache[path]) {
      const img = new Image();
      img.src = 'Textures/' + path;
      img.onload = () => resolve(img);
      img.onerror = () => reject();
      image_cache[path] = img;
    } else {
      const img = image_cache[path];
      if (img.complete)
        resolve(img);
      else
        img.addEventListener('load', () => resolve(img))
    }
  });
}

AddTextures(1, 1, "loading.png", 256, 256, 256, 256, 0, 0, 0, 0);
AddTextures(1, 2, "saving.png", 128, 128, 128, 128, 0, 0, 0, 0);
AddTextures(2, 3, "splash0.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(2, 4, "splash1.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(2, 5, "splash2.png", 1024, 256, 1024, 256, 0, 0, 0, 0);
AddTextures(4, 6, "fontfirasans.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(3, 7, "fontyorkten.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(4, 8, "fontmono.png", 256, 256, 64, 64, 0, 0, 0, 0);
AddTextures(1, 9, "fontdebug.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(5, 53, "hud.png", 512, 512, 64, 64, 0, 0, 0, 0);
AddTextures(5, 54, "hud.png", 512, 512, 32, 32, 0, 128, 0x100, 0x40);
AddTextures(5, 55, "hud.png", 512, 512, 128, 128, 0, 0, 0, 0);
AddTextures(4, 56, "hud_text.png", 1024, 512, 1024, 128, 0, 0, 0, 0);
AddTextures(3, 57, "hud_controller_buttons.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(3, 58, "hud_controller_buttons.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(3, 59, "hud_controller_buttons.png", 1280, 1280, 128, 128, 0, 384, 0, 0);
AddTextures(3, 60, "hud_controller_buttons.png", 1280, 1280, 128, 128, 0, 768, 0, 0);
AddTextures(3, 61, "hud_controller_buttons.png", 1280, 1280, 128, 128, 0, 1152, 0, 0);
AddTextures(9, 62, "keyboard_buttons", 3072, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(3, 87, "floor_surface.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(3, 88, "base_eggship.png", 1024, 1024, 384, 384, 0, 0, 0, 0);
AddTextures(3, 89, "base_eggship.png", 1024, 1024, 384, 16, 640, 752, 0x180, 0x10);
AddTextures(3, 90, "base_eggship.png", 1024, 1024, 128, 128, 0, 0, 0, 0);
AddTextures(3, 91, "base_eggship.png", 1024, 1024, 128, 256, 384, 0, 0x80, 0x100);
AddTextures(3, 92, "base_eggship.png", 1024, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(3, 93, "base_eggship.png", 1024, 1024, 348, 128, 512, 384, 0, 0);
AddTextures(3, 94, "base_eggship2.png", 1024, 1024, 384, 384, 0, 0, 0, 0);
AddTextures(3, 95, "base_eggship2.png", 1024, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(3, 96, "base_eggship2.png", 1024, 1024, 512, 128, 512, 384, 0x200, 0x100);
AddTextures(3, 97, "base_eggship3.png", 1024, 1024, 384, 384, 384, 384, 0x100, 0);
AddTextures(3, 98, "base_eggship3.png", 1024, 1024, 384, 640, 0, 0, 0, 0);
AddTextures(3, 99, "base_eggship3.png", 1024, 1024, 128, 128, 0, 0, 0, 0);
AddTextures(3, 100, "base_eggship3.png", 1024, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(3, 101, "base_skynight.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(3, 102, "base_surface.png", 1024, 1024, 1024, 256, 0, 0, 0, 0);
AddTextures(3, 103, "base_surface.png", 1024, 1024, 512, 256, 0, 0, 0, 0);
AddTextures(3, 104, "base_surface2.png", 1024, 1024, 1024, 512, 0, 0, 0, 0);
AddTextures(3, 105, "deco_basecamp.png", 2048, 2048, 512, 512, 0, 0, 0, 0);
AddTextures(3, 106, "deco_basecamp.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(3, 107, "deco_basecamp.png", 2048, 2048, 256, 128, 0, 0, 0, 0);
AddTextures(3, 108, "deco_basecamp.png", 2048, 2048, 256, 512, 0, 0, 0, 0);
AddTextures(3, 109, "deco_basecamp.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(3, 110, "deco_basecamp.png", 2048, 2048, 256, 256, 0, 1408, 0, 0);
AddTextures(3, 111, "deco_basecamp.png", 2048, 2048, 896, 512, 0, 1024, 0, 0);
AddTextures(3, 112, "deco_basecamp.png", 2048, 2048, 256, 256, 896, 1024, 0x100, 0x200);
AddTextures(3, 113, "deco_tutorial.png", 1024, 1024, 512, 256, 0, 0, 0, 0);
AddTextures(3, 114, "deco_tutorial.png", 1024, 1024, 256, 256, 0, 512, 0, 0);
AddTextures(4, 10, "menu_title.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 11, "menu_titlegal.png", 1024, 1024, 1024, 1024, 0, 0, 0, 0);
AddTextures(4, 12, "main_body.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(4, 13, "main_dirt.png", 1024, 256, 1024, 256, 0, 0, 0, 0);
AddTextures(4, 14, "main_door.png", 512, 1024, 512, 1024, 0, 0, 0, 0);
AddTextures(4, 15, "main_doorback.png", 1024, 1024, 1024, 1024, 0, 0, 0, 0);
AddTextures(4, 16, "main_doorframe.png", 1280, 1080, 1280, 1080, 0, 0, 0, 0);
AddTextures(4, 17, "main_fore1.png", 512, 1080, 512, 1080, 0, 0, 0, 0);
AddTextures(4, 18, "main_fore2.png", 768, 1080, 768, 1080, 0, 0, 0, 0);
AddTextures(4, 19, "main_head.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(4, 20, "menu_disp.png", 1408, 768, 1024, 256, 192, 0, 0, 0);
AddTextures(4, 21, "menu_disp.png", 1408, 768, 128, 256, 0, 0, 0, 0);
AddTextures(4, 22, "menu_disp.png", 1408, 768, 1408, 256, 0, 256, 0, 0);
AddTextures(4, 23, "menu_charsel.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 24, "menu_chardoor.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(4, 25, "menu_generic.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 26, "menu_cave1.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 27, "menu_cave2.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 28, "menu_brick1.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 29, "menu_brick2.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 30, "menu_basic.png", 1280, 1280, 1280, 1280, 0, 0, 0, 0);
AddTextures(4, 31, "menu_basic.png", 1280, 1280, 64, 64, 0, 0, 0, 0);
AddTextures(4, 32, "menu_basic.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(4, 33, "menu_basic.png", 1280, 1280, 256, 128, 0, 0, 0, 0);
AddTextures(4, 34, "menu_basic.png", 1280, 1280, 512, 128, 384, 640, 0, 0);
AddTextures(4, 35, "menu_basic.png", 1280, 1280, 384, 128, 896, 640, 0, 0);
AddTextures(4, 36, "menu_basic.png", 1280, 1280, 128, 128, 768, 768, 0, 0);
AddTextures(4, 37, "menu_header.png", 1280, 1280, 1280, 1280, 0, 0, 0, 0);
AddTextures(4, 38, "menu_leader.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(4, 39, "menu_leader.png", 1280, 1280, 1152, 128, 0, 0, 0, 0);
AddTextures(4, 40, "menu_leader.png", 1280, 1280, 256, 128, 0, 640, 0, 0);
AddTextures(4, 41, "menu_leader.png", 1280, 1280, 640, 384, 256, 640, 0, 0);
AddTextures(4, 42, "menu_deathmatch.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 43, "menu_deathmatch2.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(4, 44, "menu_deathmatch3.png", 1024, 1024, 1024, 1024, 0, 0, 0, 0);
AddTextures(4, 45, "menu_deathmatch4.png", 1280, 1280, 1280, 1280, 0, 0, 0, 0);
AddTextures(4, 46, "menu_deathmatch5.png", 1280, 1280, 1280, 1280, 0, 0, 0, 0);
AddTextures(4, 47, "menu_deathmatch5.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(4, 48, "menu_deathmatch5.png", 1280, 1280, 192, 128, 0, 0, 0, 0);
AddTextures(4, 49, "menu_deathmatch5.png", 1280, 1280, 32, 32, 0, 768, 0x360, 0x20);
AddTextures(4, 50, "menu_deathmatch6.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(4, 51, "menu_online.png", 1920, 1080, 1920, 1080, 0, 0, 0, 0);
AddTextures(7, 52, "menu_tunnel.png", 512, 1152, 512, 384, 0, 0, 0, 0);
AddTextures(7, 63, "journal_pagetorn.png", 1024, 1024, 1024, 1024, 0, 0, 0, 0);
AddTextures(4, 64, "journal_back.png", 2048, 1024, 2048, 1024, 0, 0, 0, 0);
AddTextures(4, 65, "journal_pageflip.png", 2048, 1024, 2048, 1024, 0, 0, 0, 0);
AddTextures(4, 66, "journal_select.png", 640, 96, 640, 96, 0, 0, 0, 0);
AddTextures(4, 67, "journal_stickers.png", 800, 800, 80, 80, 0, 0, 0, 0);
AddTextures(4, 68, "journal_stickers.png", 800, 800, 80, 80, 0, 160, 0, 0);
AddTextures(4, 69, "journal_stickers.png", 800, 800, 160, 160, 0, 480, 0, 0);
AddTextures(7, 70, "journal_top_main.png", 2048, 1024, 2048, 1024, 0, 0, 0, 0);
AddTextures(7, 71, "journal_top_entry.png", 2048, 1024, 2048, 1024, 0, 0, 0, 0);
AddTextures(7, 72, "journal_top_gameover.png", 2048, 1024, 2048, 1024, 0, 0, 0, 0);
AddTextures(4, 73, "journal_top_profile.png", 2048, 1024, 2048, 1024, 0, 0, 0, 0);
AddTextures(7, 74, "journal_entry_bg.png", 1280, 1280, 320, 320, 0, 0, 0, 0);
AddTextures(4, 75, "journal_entry_place.png", 2560, 1280, 640, 320, 0, 0, 0, 0);
AddTextures(7, 76, "journal_entry_mons.png", 1600, 960, 160, 160, 0, 0, 0, 0);
AddTextures(7, 77, "journal_entry_mons_big.png", 1600, 1920, 320, 320, 0, 0, 0, 0);
AddTextures(7, 78, "journal_entry_people.png", 1600, 800, 160, 160, 0, 0, 0, 0);
AddTextures(7, 79, "journal_entry_people.png", 1600, 800, 320, 320, 640, 480, 0, 0);
AddTextures(7, 80, "journal_entry_items.png", 1600, 1600, 160, 160, 0, 0, 0, 0);
AddTextures(7, 81, "journal_elements.png", 512, 512, 192, 96, 0, 0, 0, 0);
AddTextures(7, 82, "journal_elements.png", 512, 512, 64, 64, 0, 32, 0, 0);
AddTextures(7, 83, "journal_entry_traps.png", 1600, 1600, 160, 160, 0, 0, 0, 0);
AddTextures(7, 84, "journal_entry_traps.png", 1600, 1600, 160, 320, 0, 640, 0, 0);
AddTextures(7, 85, "journal_entry_traps.png", 1600, 1600, 320, 320, 0, 1280, 0, 0);
AddTextures(7, 86, "journal_story.png", 1024, 2048, 1024, 2048, 0, 0, 0, 0);
AddTextures(3, 115, "floor_cave.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 116, "floor_cave.png", 1536, 1536, 128, 256, 0, 128, 0, 0);
AddTextures(7, 117, "floor_cave.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 118, "floor_cave.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 119, "floor_cave.png", 1536, 1536, 256, 256, 1280, 768, 0, 0);
AddTextures(5, 120, "deco_cave.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 121, "deco_cave.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(3, 122, "bg_cave.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 123, "floor_cave.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 124, "floor_jungle.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 125, "floor_jungle.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 126, "floor_jungle.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 127, "deco_jungle.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 128, "deco_jungle.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 129, "bg_jungle.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 130, "floor_jungle.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 131, "floor_volcano.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 132, "floor_volcano.png", 1536, 1536, 256, 128, 0, 0, 0, 0);
AddTextures(7, 133, "floor_volcano.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 134, "floor_volcano.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 135, "deco_volcano.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 136, "deco_volcano.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 137, "deco_volcano.png", 1536, 1536, 512, 384, 0, 640, 0, 0);
AddTextures(7, 138, "deco_volcano.png", 1536, 1536, 512, 512, 0, 1024, 0, 0);
AddTextures(7, 139, "bg_volcano.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 140, "floor_volcano.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 141, "deco_jungle.png", 1536, 1536, 384, 320, 0, 640, 0x180, 0x280);
AddTextures(7, 142, "floorstyled_stone.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 143, "bg_stone.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 144, "floorstyled_stone.png", 1280, 1280, 128, 128, 512, 768, 0x80, 0x80);
AddTextures(7, 145, "floor_temple.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 146, "floor_temple.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 147, "floor_temple.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 148, "deco_temple.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 149, "deco_temple.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 150, "bg_temple.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 151, "floor_temple.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 152, "floor_temple.png", 1536, 1536, 384, 320, 512, 0, 0x200, 0x280);
AddTextures(7, 153, "floor_tidepool.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 154, "floor_tidepool.png", 1536, 1536, 128, 256, 0, 128, 0, 0);
AddTextures(7, 155, "floor_tidepool.png", 1536, 1536, 256, 256, 0, 0, 0, 0);
AddTextures(7, 156, "floor_tidepool.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 157, "floor_tidepool.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 158, "deco_tidepool.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 159, "deco_tidepool.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 160, "bg_tidepool.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 161, "floor_tidepool.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 162, "floor_ice.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 163, "floor_ice.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 164, "floor_ice.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 165, "deco_ice.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 166, "deco_ice.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 167, "deco_ice.png", 1536, 1536, 256, 256, 0, 640, 0, 0);
AddTextures(7, 168, "deco_ice.png", 1536, 1536, 512, 640, 0, 896, 0, 0);
AddTextures(7, 169, "bg_ice.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 170, "floor_ice.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 171, "floor_ice.png", 1536, 1536, 256, 256, 384, 1152, 0x100, 0x100);
AddTextures(7, 172, "floor_babylon.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 173, "floor_babylon.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 174, "floor_babylon.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 175, "floor_babylon.png", 1536, 1536, 256, 256, 384, 1024, 0x100, 0x200);
AddTextures(7, 176, "deco_babylon.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 177, "deco_babylon.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 178, "deco_babylon.png", 1536, 1536, 256, 128, 0, 0, 0, 0);
AddTextures(7, 180, "bg_babylon.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 181, "floor_babylon.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 179, "items_ushabti.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 182, "floor_sunken.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 183, "floor_sunken.png", 1536, 1536, 256, 128, 0, 0, 0, 0);
AddTextures(7, 184, "floor_sunken.png", 1536, 1536, 256, 128, 384, 896, 0, 0);
AddTextures(7, 185, "floor_sunken.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 186, "floor_sunken.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 187, "deco_eggplant.png", 1536, 1536, 384, 320, 0, 0, 0x180, 0x140);
AddTextures(7, 188, "deco_sunken.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 189, "deco_sunken.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 190, "deco_sunken.png", 1536, 1536, 256, 768, 0, 640, 0, 0);
AddTextures(7, 191, "deco_sunken.png", 1536, 1536, 128, 128, 256, 640, 0, 0);
AddTextures(7, 192, "bg_sunken.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 193, "floor_sunken.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 194, "floor_sunken.png", 1536, 1536, 384, 320, 512, 0, 0x200, 0x280);
AddTextures(7, 195, "floor_sunken.png", 1536, 1536, 64, 64, 768, 1408, 0, 0);
AddTextures(7, 196, "bg_duat.png", 1024, 1024, 1024, 256, 0, 0, 0, 0);
AddTextures(7, 197, "floorstyled_duat.png", 1280, 1280, 128, 128, 512, 768, 0x80, 0x80);
AddTextures(7, 198, "bg_duat.png", 1024, 1024, 512, 256, 0, 0, 0, 0);
AddTextures(7, 199, "bg_duat.png", 1024, 1024, 128, 256, 512, 0, 0, 0);
AddTextures(7, 200, "bg_duat2.png", 1024, 1024, 1024, 512, 0, 0, 0, 0);
AddTextures(7, 201, "deco_temple.png", 1536, 1536, 512, 640, 0, 640, 0, 0);
AddTextures(7, 202, "floor_eggplant.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(7, 203, "floor_eggplant.png", 1536, 1536, 256, 256, 0, 0, 0, 0);
AddTextures(7, 204, "floor_eggplant.png", 1536, 1536, 384, 320, 0, 896, 0x180, 0x280);
AddTextures(7, 205, "floor_eggplant.png", 1536, 1536, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 206, "floor_eggplant.png", 1536, 1536, 256, 256, 1280, 768, 0, 0);
AddTextures(7, 207, "deco_eggplant.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 208, "bg_eggplant.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 209, "floor_eggplant.png", 1536, 1536, 128, 128, 1280, 640, 0x80, 0x80);
AddTextures(7, 210, "floorstyled_beehive.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 211, "bg_beehive.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 212, "floorstyled_beehive.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 213, "deco_cosmic.png", 2048, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 214, "deco_cosmic.png", 2048, 1536, 128, 256, 0, 1280, 0, 0);
AddTextures(7, 215, "deco_cosmic.png", 2048, 1536, 128, 256, 0, 1024, 0, 0);
AddTextures(5, 216, "floorstyled_wood.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(5, 217, "floorstyled_wood.png", 1280, 1280, 128, 256, 0, 0, 0, 0);
AddTextures(5, 218, "floorstyled_wood.png", 1280, 1280, 256, 256, 0, 0, 0, 0);
AddTextures(5, 219, "floorstyled_wood.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(5, 220, "floorstyled_wood.png", 1280, 1280, 256, 256, 1024, 512, 0, 0);
AddTextures(7, 221, "floorstyled_stone.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 222, "floorstyled_stone.png", 1280, 1280, 256, 128, 1024, 128, 0, 0);
AddTextures(7, 223, "floorstyled_stone.png", 1280, 1280, 256, 256, 0, 0, 0, 0);
AddTextures(7, 224, "floorstyled_stone.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 225, "floorstyled_temple.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 226, "floorstyled_temple.png", 1280, 1280, 256, 384, 0, 0, 0, 0);
AddTextures(7, 227, "floorstyled_temple.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 228, "floorstyled_pagoda.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 229, "floorstyled_pagoda.png", 1280, 1280, 128, 256, 0, 0, 0, 0);
AddTextures(7, 230, "floorstyled_pagoda.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 231, "floorstyled_babylon.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 232, "floorstyled_babylon.png", 1280, 1280, 128, 256, 0, 0, 0, 0);
AddTextures(7, 233, "floorstyled_babylon.png", 1280, 1280, 256, 128, 0, 0, 0, 0);
AddTextures(7, 234, "floorstyled_babylon.png", 1280, 1280, 896, 128, 384, 1024, 0, 0);
AddTextures(7, 235, "floorstyled_babylon.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 236, "floorstyled_sunken.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 237, "floorstyled_sunken.png", 1280, 1280, 256, 128, 0, 0, 0, 0);
AddTextures(7, 238, "floorstyled_sunken.png", 1280, 1280, 896, 128, 384, 1024, 0, 0);
AddTextures(7, 239, "floorstyled_sunken.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 240, "floorstyled_vlad.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 241, "floorstyled_vlad.png", 1280, 1280, 128, 256, 0, 0, 0, 0);
AddTextures(7, 242, "floorstyled_vlad.png", 1280, 1280, 256, 384, 0, 0, 0, 0);
AddTextures(7, 243, "floorstyled_vlad.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 244, "floorstyled_vlad.png", 1280, 1280, 128, 256, 1024, 384, 0x80, 0x100);
AddTextures(7, 245, "bg_vlad.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 246, "floorstyled_gold.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 247, "floorstyled_gold.png", 1280, 1280, 128, 256, 0, 0, 0, 0);
AddTextures(7, 248, "floorstyled_gold.png", 1280, 1280, 256, 256, 0, 0, 0, 0);
AddTextures(7, 249, "floorstyled_gold.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 250, "floorstyled_gold_normal.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 251, "deco_gold.png", 1536, 1536, 512, 512, 0, 0, 0, 0);
AddTextures(7, 252, "deco_gold.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 253, "deco_gold.png", 1536, 1536, 384, 320, 0, 640, 0x180, 0x280);
AddTextures(7, 254, "bg_gold.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 255, "floorstyled_gold.png", 1280, 1280, 128, 128, 512, 768, 0x80, 0x80);
AddTextures(7, 256, "floorstyled_mothership.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 257, "bg_mothership.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 258, "floorstyled_duat.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 259, "floorstyled_palace.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 260, "floorstyled_palace.png", 1280, 1280, 256, 256, 1024, 768, 0, 0);
AddTextures(7, 261, "floorstyled_palace.png", 1280, 1280, 384, 256, 512, 1024, 0, 0);
AddTextures(7, 262, "floorstyled_palace.png", 1280, 1280, 256, 384, 768, 640, 0, 0);
AddTextures(7, 263, "floorstyled_guts.png", 1280, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 264, "deco_extra.png", 1536, 1536, 512, 640, 0, 0, 0, 0);
AddTextures(7, 265, "deco_extra.png", 1536, 1536, 512, 768, 0, 640, 0, 0);
AddTextures(5, 266, "floormisc.png", 1024, 1024, 128, 128, 0, 0, 0, 0);
AddTextures(5, 267, "floormisc.png", 1024, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(5, 268, "border_main.png", 1024, 1024, 128, 128, 0, 0, 0, 0);
AddTextures(7, 269, "border_main.png", 1024, 1024, 256, 256, 0, 0, 0x100, 0x300);
AddTextures(3, 270, "char_yellow.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 271, "char_magenta.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 272, "char_cyan.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 273, "char_black.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 274, "char_cinnabar.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 275, "char_green.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 276, "char_olive.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 277, "char_white.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 278, "char_cerulean.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 279, "char_blue.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 280, "char_lime.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 281, "char_lemon.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 282, "char_iris.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 283, "char_gold.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 284, "char_red.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 285, "char_pink.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 286, "char_violet.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 287, "char_gray.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 288, "char_khaki.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(4, 289, "char_orange.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 290, "char_hired.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 291, "char_eggchild.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(3, 292, "monsters_pets.png", 1536, 1536, 128, 128, 0, 0, 0, 0);
AddTextures(4, 293, "monstersbasic01.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 294, "monstersbasic02.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 295, "monstersbasic03.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 296, "monsters01.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 297, "monsters02.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 298, "monsters03.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 299, "monsters03.png", 2048, 2048, 256, 128, 0, 0, 0, 0);
AddTextures(7, 300, "monstersbig01.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(7, 301, "monstersbig02.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(7, 302, "monstersbig02.png", 2048, 2048, 256, 384, 512, 1024, 0, 0);
AddTextures(7, 303, "monstersbig03.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(7, 304, "monstersbig04.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(7, 305, "monstersbig04.png", 2048, 2048, 128, 256, 0, 0, 0, 0);
AddTextures(7, 306, "monstersbig04.png", 2048, 2048, 384, 256, 0, 1792, 0, 0);
AddTextures(7, 307, "monstersbig05.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(7, 308, "monstersbig05.png", 2048, 2048, 256, 128, 0, 0, 0, 0);
AddTextures(7, 310, "monstersbig05.png", 2048, 2048, 384, 384, 0, 1664, 0, 0);
AddTextures(7, 311, "monstersbig05.png", 2048, 2048, 128, 384, 0, 1280, 0, 0);
AddTextures(7, 312, "monstersbig05.png", 2048, 2048, 128, 128, 0, 896, 0, 0);
AddTextures(7, 313, "monstersbig06.png", 2048, 2048, 256, 256, 640, 0, 0x500, 0x800);
AddTextures(7, 314, "monstersbig06.png", 2048, 2048, 640, 768, 0, 0, 0x280, 0x600);
AddTextures(7, 315, "monstersbig06.png", 2048, 2048, 512, 640, 1536, 256, 0x200, 0x280);
AddTextures(7, 316, "monstersbig06.png", 2048, 2048, 256, 256, 640, 896, 0x500, 0x100);
AddTextures(7, 317, "monstersbig06.png", 2048, 2048, 256, 384, 640, 256, 0, 0);
AddTextures(7, 318, "monstersbig06.png", 2048, 2048, 128, 384, 896, 256, 0, 0);
AddTextures(7, 319, "monstersbig06.png", 2048, 2048, 256, 384, 1024, 256, 0, 0);
AddTextures(7, 320, "monstersbig06.png", 2048, 2048, 256, 384, 1280, 256, 0, 0);
AddTextures(7, 321, "monstersbig06.png", 2048, 2048, 256, 256, 640, 640, 0, 0);
AddTextures(7, 322, "monstersbig06.png", 2048, 2048, 256, 256, 0, 1280, 0, 0);
AddTextures(7, 323, "monstersbig06.png", 2048, 2048, 512, 256, 0, 1536, 0, 0);
AddTextures(7, 324, "monsters_ghost.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(7, 325, "monsters_ghost.png", 2048, 2048, 128, 128, 0, 1280, 0, 0);
AddTextures(7, 326, "monsters_olmec.png", 2048, 2048, 512, 512, 0, 0, 0, 0);
AddTextures(7, 327, "monsters_olmec.png", 2048, 2048, 512, 256, 0, 0, 0, 0);
AddTextures(7, 328, "monsters_olmec.png", 2048, 2048, 256, 256, 0, 0, 0, 0);
AddTextures(7, 329, "monsters_olmec.png", 2048, 2048, 256, 256, 0, 128, 0, 0);
AddTextures(7, 330, "monsters_olmec.png", 2048, 2048, 256, 128, 0, 0, 0, 0);
AddTextures(7, 331, "monsters_osiris.png", 2048, 2048, 640, 896, 0, 0, 0, 0);
AddTextures(7, 332, "monsters_osiris.png", 2048, 2048, 384, 384, 0, 896, 0, 0);
AddTextures(7, 333, "monsters_osiris.png", 2048, 2048, 384, 384, 0, 1280, 0, 0);
AddTextures(7, 334, "monsters_osiris.png", 2048, 2048, 128, 128, 1920, 1664, 0x80, 0x180);
AddTextures(7, 335, "monsters_osiris.png", 2048, 2048, 384, 128, 1536, 1152, 0, 0);
AddTextures(7, 336, "monsters_tiamat.png", 2048, 2048, 256, 384, 0, 0, 0, 0);
AddTextures(7, 337, "monsters_tiamat.png", 2048, 2048, 384, 384, 0, 0, 0, 0);
AddTextures(7, 338, "monsters_tiamat.png", 2048, 2048, 128, 384, 384, 384, 0, 0);
AddTextures(7, 339, "monsters_tiamat.png", 2048, 2048, 128, 256, 1536, 1152, 0, 0);
AddTextures(7, 340, "monsters_tiamat.png", 2048, 2048, 256, 256, 1280, 1152, 0, 0);
AddTextures(7, 341, "monsters_tiamat.png", 2048, 2048, 128, 640, 1920, 1408, 0, 0);
AddTextures(7, 342, "monsters_tiamat.png", 2048, 2048, 1152, 640, 768, 1408, 0, 0);
AddTextures(7, 343, "monsters_tiamat.png", 2048, 2048, 512, 512, 768, 896, 0, 0);
AddTextures(7, 344, "monsters_tiamat.png", 2048, 2048, 768, 1280, 0, 768, 0, 0);
AddTextures(7, 345, "monsters_yama.png", 1280, 1280, 256, 384, 1024, 0, 0, 0);
AddTextures(7, 346, "monsters_yama.png", 1280, 1280, 1024, 1280, 0, 0, 0, 0);
AddTextures(7, 347, "monsters_yama.png", 1280, 1280, 256, 512, 1024, 768, 0, 0);
AddTextures(7, 348, "monsters_hundun.png", 1280, 1280, 384, 512, 0, 0, 0, 0);
AddTextures(7, 349, "monsters_hundun.png", 1280, 1280, 128, 256, 384, 0, 0x80, 0x100);
AddTextures(7, 350, "monsters_hundun.png", 1280, 1280, 128, 256, 384, 256, 0x80, 0x100);
AddTextures(7, 351, "monsters_hundun.png", 1280, 1280, 256, 256, 512, 0, 0x300, 0x200);
AddTextures(7, 352, "monsters_hundun.png", 1280, 1280, 128, 128, 0, 512, 0x500, 0x100);
AddTextures(7, 353, "monsters_hundun.png", 1280, 1280, 384, 384, 0, 768, 0, 0);
AddTextures(7, 354, "monstersbig04.png", 2048, 2048, 128, 128, 1792, 256, 0x100, 0x100);
AddTextures(7, 355, "monsters02.png", 2048, 2048, 128, 128, 640, 640, 0x300, 0x80);
AddTextures(7, 356, "monsters02.png", 2048, 2048, 128, 128, 768, 1664, 0x300, 0x80);
AddTextures(3, 357, "items.png", 2048, 2048, 128, 128, 0, 0, 0, 0);
AddTextures(7, 358, "mounts.png", 2048, 2048, 128, 128, 0, 0, 0x800, 0x100);
AddTextures(5, 359, "fx_explosion.png", 1024, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(4, 360, "fx_small.png", 1024, 1024, 128, 128, 0, 0, 0, 0);
AddTextures(5, 361, "fx_small2.png", 1024, 1024, 128, 128, 0, 0, 0, 0);
AddTextures(4, 362, "fx_small3.png", 1024, 1024, 128, 128, 0, 0, 0, 0);
AddTextures(4, 363, "fx_big.png", 1024, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(4, 364, "fx_rubble.png", 1024, 1280, 128, 128, 0, 0, 0, 0);
AddTextures(7, 365, "fx_ankh.png", 2048, 2048, 512, 768, 0, 0, 0, 0);
AddTextures(7, 366, "fx_ankh.png", 2048, 2048, 256, 256, 0, 1536, 0x800, 0x200);
AddTextures(5, 367, "shadows.png", 1024, 256, 256, 256, 0, 0, 0, 0);
AddTextures(7, 368, "coffins.png", 1024, 768, 256, 256, 0, 0, 0x200, 0x100);
AddTextures(7, 369, "coffins.png", 1024, 768, 256, 256, 0, 256, 0x200, 0x100);
AddTextures(7, 370, "coffins.png", 1024, 768, 256, 256, 0, 512, 0x200, 0x100);
AddTextures(7, 371, "coffins.png", 1024, 768, 256, 256, 512, 0, 0x200, 0x100);
AddTextures(7, 372, "coffins.png", 1024, 768, 256, 256, 512, 256, 0x200, 0x100);
AddTextures(4, 373, "credits.png", 1024, 1024, 256, 256, 0, 0, 0, 0);
AddTextures(4, 374, "credits.png", 1024, 1024, 128, 128, 0, 512, 0, 0);
AddTextures(9, 375, "liquidgradient_water", 1, 1, 1, 1, 0, 0, 0, 0);
AddTextures(9, 376, "liquidgradient_eggplant_water", 1, 1, 1, 1, 0, 0, 0, 0);
AddTextures(9, 377, "liquidgradient_lava", 1, 1, 1, 1, 0, 0, 0, 0);
AddTextures(7, 378, "noise0.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 379, "noise1.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(3, 380, "bayer8.png", 8, 8, 8, 8, 0, 0, 0, 0);
AddTextures(3, 381, "lut_original.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(5, 382, "lut_backlayer.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 383, "lut_blackmarket.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 384, "lut_vlad.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 385, "lut_icecaves.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(7, 386, "shine.png", 512, 512, 512, 512, 0, 0, 0, 0);
AddTextures(8, 387, "OldTextures/ai.png", 64, 128, 16, 16, 0, 0, 0, 0);

const specific_textures = {
  "DwellingArea": {
    10: 367,
    9: 122,
    8: 121,
    7: 119,
    6: 118,
    5: 116,
    4: 123
  },
  "JungleArea": {
    10: 368,
    9: 128,
    8: 127,
    7: 126,
    6: 125,
    5: 124,
    4: 129
  },
  "VolcanoArea": {
    10: 367,
    9: 137,
    8: 136,
    7: 135,
    6: 134,
    5: 132,
    4: 140
  },
  "OlmecArea": {
    10: 367,
    9: 129,
    8: 128,
    7: 143,
    6: 142,
    5: 125,
    4: 144
  },
  "TempleArea": {
    10: 368,
    9: 150,
    8: 149,
    7: 148,
    6: 147,
    5: 146,
    4: 151
  },
  "TidepoolArea": {
    10: 367,
    9: 160,
    8: 159,
    7: 158,
    6: 157,
    5: 154,
    4: 161
  },
  "IceCavesArea": {
    10: 367,
    9: 167,
    8: 166,
    7: 165,
    6: 164,
    5: 163,
    4: 170
  },
  "BabylonArea": {
    10: 367,
    9: 178,
    8: 177,
    7: 175,
    6: 174,
    5: 173,
    4: 181
  },
  "SunkenCityArea": {
    10: 367,
    9: 190,
    8: 189,
    7: 187,
    6: 186,
    5: 183,
    4: 193
  },
  "CityOfGoldArea": {
    10: 369,
    9: 251,
    8: 250,
    7: 148,
    6: 252,
    5: 146,
    4: 253
  },
  "AbzuArea": {
    10: 367,
    9: 160,
    8: 159,
    7: 158,
    6: 157,
    5: 154,
    4: 161
  },
  "TiamatArea": {
    10: 367,
    9: 178,
    8: 177,
    7: 175,
    6: 174,
    5: 154,
    4: 181
  },
  "EggplantArea": {
    10: 367,
    9: -1,
    8: 208,
    7: 206,
    6: 205,
    5: 203,
    4: 209
  },
  "HundunArea": {
    10: 367,
    9: 190,
    8: 189,
    7: 187,
    6: 186,
    5: 183,
    4: 193
  },
  "BasecampArea": {
    10: 367,
    9: 122,
    8: 121,
    7: 119,
    6: 118,
    5: 116,
    4: 123
  }
};

export default { blocks, items, bestiary, chances, LoadTexture, textures, specific_textures };

// For debugging
window.datasheet = this;