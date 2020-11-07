import datasheet from "./data.js";
import entities from './entities.js';
const knownTiles = new Map();
const CHUNK_SIZE = 48;

const SVG_NS = "http://www.w3.org/2000/svg";

const loadKnownTiles = async () => {
  const known = [
  ["floor", ["ENT_TYPE_FLOOR_GENERIC"]],
  ["beehive_floor", ["ENT_TYPE_FLOORSTYLED_BEEHIVE"]],
  ["floor_hard", ["ENT_TYPE_FLOOR_BORDERTILE"]],
  ["lamp_hang", ["ENT_TYPE_ITEM_LAMP"]],
  ["merchant", ["ENT_TYPE_MONS_MERCHANT"]],
  ["shopkeeper", ["ENT_TYPE_MONS_SHOPKEEPER"]],
  ["treasure", ["ENT_TYPE_ITEM_VAULTCHEST", {
    "box": [1.25, 1.25]
  }]],
  ["stone_floor", ["ENT_TYPE_FLOORSTYLED_STONE"]],
  ["ladder", ["ENT_TYPE_FLOOR_LADDER"]],
  ["ladder_plat", ["ENT_TYPE_FLOOR_LADDER_PLATFORM"]],
  ["shop_wall", ["ENT_TYPE_FLOOR_GENERIC"]],
  ["door_drop_held", ["ENT_TYPE_BG_DOOR_FRONT_LAYER"]],
  ["mattock", ["ENT_TYPE_ITEM_MATTOCK"]],
  ["minewood_floor", ["ENT_TYPE_FLOORSTYLED_MINEWOOD"]],
  ["push_block", ["ENT_TYPE_ACTIVEFLOOR_PUSHBLOCK"]],
  ["crate", ["ENT_TYPE_ITEM_CRATE"]],
  ["pagoda_floor", ["ENT_TYPE_DECORATION_PAGODA"]],
  ["pagoda_platform", ["ENT_TYPE_FLOOR_PAGODA_PLATFORM"]],
  ["climbing_pole", ["ENT_TYPE_FLOOR_CLIMBING_POLE"]],
  ["crossbow", ["ENT_TYPE_ITEM_CROSSBOW"]],
  ["clover", ["ENT_TYPE_ITEM_PICKUP_CLOVER"]],
  ["forcefield", ["ENT_TYPE_FLOOR_FORCEFIELD"]],
  ["forcefield_top", ["ENT_TYPE_FLOOR_FORCEFIELD_TOP"]],
  ["walltorch", ["ENT_TYPE_ITEM_WALLTORCH"]],
  ["cog_floor", ["ENT_TYPE_FLOORSTYLED_COG"]],
  ["babylon_floor", ["ENT_TYPE_FLOORSTYLED_BABYLON"]],
  ["sunken_floor", ["ENT_TYPE_FLOORSTYLED_SUNKEN"]],
  ["bone_block", ["ENT_TYPE_ACTIVEFLOOR_BONEBLOCK"]],
  ["scorpion", ["ENT_TYPE_MONS_SCORPION"]],
  ["potofgold", ["ENT_TYPE_ITEM_POTOFGOLD"]],
  ["temple_floor", ["ENT_TYPE_DECORATION_TEMPLE"]],
  ["surface_floor", ["ENT_TYPE_FLOOR_SURFACE"]],
  ["platform", ["ENT_TYPE_FLOOR_PLATFORM"]],
  ["chain_ceiling", ["ENT_TYPE_FLOOR_CHAIN_CEILING"]],
  ["duat_floor", ["ENT_TYPE_FLOORSTYLED_DUAT"]],
  ["cookfire", ["ENT_TYPE_ITEM_COOKFIRE"]],
  ["woodenlog_trap", ["ENT_TYPE_ACTIVEFLOOR_WOODENLOG_TRAP"]],
  ["quicksand", ["ENT_TYPE_FLOOR_QUICKSAND"]],
  ["chainandblocks_ceiling", ["ENT_TYPE_FLOOR_CHAINANDBLOCKS_CEILING"]],
  ["sidetable", ["ENT_TYPE_BG_BASECAMP_SIDETABLE"]],
  ["jungle_floor", ["ENT_TYPE_FLOOR_JUNGLE"]],
  ["growable_vine", ["ENT_TYPE_FLOOR_GROWABLE_VINE"]],
  ["shop_woodwall", ["ENT_TYPE_FLOORSTYLED_MINEWOOD"]],
  ["sleeping_hiredhand", ["ENT_TYPE_CHAR_HIREDHAND"]],
  ["tomb_floor", ["ENT_TYPE_FLOOR_TOMB"]],
  ["falling_platform", ["ENT_TYPE_ACTIVEFLOOR_FALLING_PLATFORM"]],
  ["timed_powder_keg", ["ENT_TYPE_ACTIVEFLOOR_TIMEDPOWDERKEG"]],
  ["conveyorbelt_left", ["ENT_TYPE_FLOOR_CONVEYORBELT_LEFT", {
    "index": [8, 11]
  }]],
  ["conveyorbelt_right", ["ENT_TYPE_FLOOR_CONVEYORBELT_RIGHT", {
    "index": [8, 10]
  }]],
  ["pot", ["ENT_TYPE_ITEM_POT"]],
  ["tv", ["ENT_TYPE_ITEM_TV"]],
  ["thorn_vine", ["ENT_TYPE_FLOOR_THORN_VINE"]],
  ["wanted_poster", ["ENT_TYPE_BG_SHOPWANTEDPOSTER", {
      "box": [2, 2]
    }],
    ["ENT_TYPE_BG_SHOPWANTEDPORTRAIT", {
      "offset": [0.5, 0.75]
    }]
  ],
  ["diningtable", ["ENT_TYPE_FLOOR_BASECAMP_DININGTABLE", {
    "box": [3, 1],
    "count": 3
  }]],
  ["shop_door", ["ENT_TYPE_BG_SHOP_ENTRANCEDOOR", {
    "index": [9, 0]
  }]],
  ["door", ["ENT_TYPE_BG_DOOR", {
    "box": [3, 3],
    "offset": [0, 0.69]
  }]],
  ["crushtraplarge", ["ENT_TYPE_ACTIVEFLOOR_CRUSH_TRAP_LARGE", {
    "box": [2, 2]
  }]],
  ["coffin", ["ENT_TYPE_ITEM_COFFIN", {
    "box": [2, 2],
    "index": [0, 1]
  }]],
  ["locked_door", ["ENT_TYPE_BG_SHOP_BACKDOOR", {
      "box": [2, 2]
    }],
    ["ENT_TYPE_FLOOR_DOOR_LOCKED", {
      "offset": [0.5234375, 0.5234375]
    }]
  ],
  ["pen_locked_door", ["ENT_TYPE_BG_SHOP_BACKDOOR"],
    ["ENT_TYPE_FLOOR_DOOR_LOCKED_PEN"]
  ],
  ["couch", ["ENT_TYPE_MOUNT_BASECAMP_COUCH", {
    "box": [2, 1],
    "index": 2
  }]],
  ["ushabti", ["ENT_TYPE_ITEM_USHABTI"]],
  ["singlebed", ["ENT_TYPE_FLOOR_BASECAMP_SINGLEBED"]],
  ["dresser", ["ENT_TYPE_BG_BASECAMP_DRESSER"]],
  ["bunkbed", ["ENT_TYPE_BG_BASECAMP_BUNKBED", {
    "box": [2, 2]
  }]],
  ["telescope", ["ENT_TYPE_ITEM_TELESCOPE"]],
  ["potofgold", ["ENT_TYPE_ITEM_POTOFGOLD"]],
  ["goldbars", ["ENT_TYPE_ITEM_GOLDBARS"]],
  ["rock", ["ENT_TYPE_ITEM_ROCK"]],
  ["turkey", ["ENT_TYPE_MOUNT_TURKEY"]],
  ["cooked_turkey", ["ENT_TYPE_ITEM_PICKUP_COOKEDTURKEY"]],
  ["royal_jelly", ["ENT_TYPE_ITEM_PICKUP_ROYALJELLY"]],
  ["clover", ["ENT_TYPE_ITEM_PICKUP_CLOVER"]],
  ["cursed_pot", ["ENT_TYPE_ITEM_CURSEDPOT"]],
  ["empty_mech", ["ENT_TYPE_MOUNT_MECH"]],
  ["snap_trap", ["ENT_TYPE_ITEM_SNAP_TRAP"]],
  ["snake", ["ENT_TYPE_MONS_SNAKE"]],
  ["caveman", ["ENT_TYPE_MONS_CAVEMAN"]],
  ["scorpion", ["ENT_TYPE_MONS_SCORPION"]],
  ["tikiman", ["ENT_TYPE_MONS_TIKIMAN"]],
  ["witchdoctor", ["ENT_TYPE_MONS_WITCHDOCTOR"]],
  ["mantrap", ["ENT_TYPE_MONS_MANTRAP"]],
  ["robot", ["ENT_TYPE_MONS_ROBOT"]],
  ["lavamander", ["ENT_TYPE_MONS_LAVAMANDER"]],
  ["crocman", ["ENT_TYPE_MONS_CROCMAN"]],
  ["cobra", ["ENT_TYPE_MONS_COBRA"]],
  ["sorceress", ["ENT_TYPE_MONS_SORCERESS"]],
  ["necromancer", ["ENT_TYPE_MONS_NECROMANCER"]],
  ["jiangshi", ["ENT_TYPE_MONS_JIANGSHI"]],
  ["octopus", ["ENT_TYPE_MONS_OCTOPUS"]],
  ["hermitcrab", ["ENT_TYPE_MONS_HERMITCRAB"]],
  ["fountain_drain", ["ENT_TYPE_LOGICAL_WATER_DRAIN"]],
  ["ufo", ["ENT_TYPE_MONS_UFO"]],
  ["alien", ["ENT_TYPE_MONS_ALIEN"]],
  ["landmine", ["ENT_TYPE_ITEM_LANDMINE"]],
  ["yeti", ["ENT_TYPE_MONS_YETI"]],
  ["spring_trap", ["ENT_TYPE_FLOOR_SPRING_TRAP"]],
  ["ammit", ["ENT_TYPE_MONS_AMMIT"]],
  ["cookfire", ["ENT_TYPE_ITEM_COOKFIRE"]],
  ["mattock", ["ENT_TYPE_ITEM_MATTOCK"]],
  ["key", ["ENT_TYPE_ITEM_KEY"]],
  ["die", ["ENT_TYPE_ITEM_DIE"]],
  ["yang", ["ENT_TYPE_MONS_YANG"]],
  ["sister", ["ENT_TYPE_MONS_SISTER_PARSLEY"]],
  ["oldhunter", ["ENT_TYPE_MONS_OLD_HUNTER"]],
  ["thief", ["ENT_TYPE_MONS_THIEF"]],
  ["bodyguard", ["ENT_TYPE_MONS_BODYGUARD"]],
  ["bush_block", ["ENT_TYPE_ACTIVEFLOOR_BUSHBLOCK"]],
  ["surface_floor", ["ENT_TYPE_FLOOR_SURFACE"]],
  ["jungle_floor", ["ENT_TYPE_FLOOR_JUNGLE"]],
  ["minewood_floor", ["ENT_TYPE_FLOORSTYLED_MINEWOOD"]],
  ["stone_floor", ["ENT_TYPE_FLOORSTYLED_STONE"]],
  ["temple_floor", ["ENT_TYPE_FLOORSTYLED_TEMPLE"]],
  ["pagoda_floor", ["ENT_TYPE_FLOORSTYLED_PAGODA"]],
  ["babylon_floor", ["ENT_TYPE_FLOORSTYLED_BABYLON"]],
  ["sunken_floor", ["ENT_TYPE_FLOORSTYLED_SUNKEN"]],
  ["beehive_floor", ["ENT_TYPE_FLOORSTYLED_BEEHIVE"]],
  ["cog_floor", ["ENT_TYPE_FLOORSTYLED_COG"]],
  ["mothership_floor", ["ENT_TYPE_FLOORSTYLED_MOTHERSHIP"]],
  ["duat_floor", ["ENT_TYPE_FLOORSTYLED_DUAT"]],
  ["palace_floor", ["ENT_TYPE_FLOORSTYLED_PALACE"]],
  ["guts_floor", ["ENT_TYPE_FLOORSTYLED_GUTS"]],
  ["tomb_floor", ["ENT_TYPE_FLOOR_TOMB"]],
  ["ladder", ["ENT_TYPE_FLOOR_LADDER"]],
  ["ladder_plat", ["ENT_TYPE_FLOOR_LADDER_PLATFORM"]],
  ["vine", ["ENT_TYPE_FLOOR_VINE"]],
  ["growable_vine", ["ENT_TYPE_FLOOR_GROWABLE_VINE"]],
  ["climbing_pole", ["ENT_TYPE_FLOOR_CLIMBING_POLE"]],
  ["growable_climbing_pole", ["ENT_TYPE_FLOOR_GROWABLE_CLIMBING_POLE"]],
  ["platform", ["ENT_TYPE_FLOOR_PLATFORM"]],
  ["pagoda_platform", ["ENT_TYPE_FLOOR_PAGODA_PLATFORM"]],
  ["pen_locked_door", ["ENT_TYPE_BG_SHOP_BACKDOOR"]],
  ["spikes", ["ENT_TYPE_FLOOR_SPIKES"]],
  ["upsidedown_spikes", ["ENT_TYPE_FLOOR_SPIKES_UPSIDEDOWN"]],
  ["push_block", ["ENT_TYPE_ACTIVEFLOOR_PUSHBLOCK"]],
  ["powder_keg", ["ENT_TYPE_ACTIVEFLOOR_POWDERKEG"]],
  ["thorn_vine", ["ENT_TYPE_FLOOR_THORN_VINE"]],
  ["jungle_spear_trap", ["ENT_TYPE_FLOOR_JUNGLE_SPEAR_TRAP"]],
  ["falling_platform", ["ENT_TYPE_ACTIVEFLOOR_FALLING_PLATFORM"]],
  ["chainandblocks_ceiling", ["ENT_TYPE_FLOOR_CHAINANDBLOCKS_CEILING"]],
  ["chain_ceiling", ["ENT_TYPE_FLOOR_CHAIN_CEILING"]],
  ["factory_generator", ["ENT_TYPE_FLOOR_FACTORY_GENERATOR"]],
  ["crushtrap", ["ENT_TYPE_ACTIVEFLOOR_CRUSH_TRAP"]],
  ["quicksand", ["ENT_TYPE_FLOOR_QUICKSAND"]],
  ["timed_powder_keg", ["ENT_TYPE_ACTIVEFLOOR_TIMEDPOWDERKEG"]],
  ["elevator", ["ENT_TYPE_ACTIVEFLOOR_ELEVATOR"]],
  ["timed_forcefield", ["ENT_TYPE_FLOOR_TIMED_FORCEFIELD"]],
  ["mosquito", ["ENT_TYPE_MONS_MOSQUITO"]],
  ["imp", ["ENT_TYPE_MONS_IMP"]],
  ["slidingwall_ceiling", ["ENT_TYPE_FLOOR_SLIDINGWALL_CEILING"]],
  ["icefloor", ["ENT_TYPE_FLOOR_ICE"]],
  ["thinice", ["ENT_TYPE_ACTIVEFLOOR_THINICE"]],
  ["spark_trap", ["ENT_TYPE_FLOOR_SPARK_TRAP"]],
  ["palace_table_tray", ["ENT_TYPE_FLOOR_PALACE_TRAY_PLATFORM"]],
  ["palace_candle", ["ENT_TYPE_ITEM_PALACE_CANDLE"]],
  ["palace_bookcase", ["ENT_TYPE_FLOOR_PALACE_BOOKCASE_PLATFORM"]],
  ["pipe", ["ENT_TYPE_FLOOR_PIPE"]],
  ["sticky_trap", ["ENT_TYPE_FLOOR_STICKYTRAP_CEILING"]],
  ["giant_frog", ["ENT_TYPE_MONS_GIANTFROG", {
    "box": [3, 3]
  }]],
  ["jumpdog", ["ENT_TYPE_MONS_JUMPDOG"]],
  ["woodenlog_trap_ceiling", ["ENT_TYPE_FLOOR_IDOL_TRAP_CEILING"]],
  ["udjat_socket", ["ENT_TYPE_ITEM_UDJAT_SOCKET"]],
  ["pen_floor", ["ENT_TYPE_FLOOR_PEN"]],
  ["minewood_floor_hanging_hide", ["ENT_TYPE_FLOORSTYLED_MINEWOOD"]],
  ["vlad_floor", ["ENT_TYPE_FLOORSTYLED_VLAD"]],
  ["ghist_door2", ["ENT_TYPE_FLOOR_GENERIC"]],
  ["forcefield_top", ["ENT_TYPE_FLOOR_FORCEFIELD_TOP"]],
  ["sidetable", ["ENT_TYPE_BG_BASECAMP_SIDETABLE"]],
  ["haunted_corpse", ["ENT_TYPE_MONS_CAVEMAN"]],
  ["excalibur_stone", ["ENT_TYPE_FLOOR_EXCALIBUR_STONE"]],
  ["shop_sign", ["ENT_TYPE_FLOOR_GENERIC"],
    ["ENT_TYPE_DECORATION_SHOPSIGNICON", {
      "index": [7, 5]
    }]
  ],
  ["shop_woodwall", ["ENT_TYPE_FLOORSTYLED_MINEWOOD"]],
  ["ghist_shopkeeper", ["ENT_TYPE_MONS_CAVEMAN"]],
  ["alien_generator", ["ENT_TYPE_FLOOR_SHOPKEEPER_GENERATOR"]],
  ["bigspear_trap", ["ENT_TYPE_FLOOR_BIGSPEAR_TRAP", {
    "box": [2, 1],
    "count": 2
  }]],
  ["lightarrow", ["ENT_TYPE_ITEM_LIGHT_ARROW", {
    "box": [2, 1],
    "offset": [0.5, 0]
  }]],
  ["slidingwall_switch", ["ENT_TYPE_ITEM_SLIDINGWALL_SWITCH"]],
  ["mummy", ["ENT_TYPE_MONS_MUMMY", {
    "box": [2, 2]
  }]],
  ["altar", ["ENT_TYPE_FLOOR_ALTAR"]],
  ["mushroom_base", ["ENT_TYPE_FLOOR_MUSHROOM_BASE"]],
  ["lamassu", ["ENT_TYPE_MONS_LAMASSU", {
    "box": [2, 2]
  }]],
  ["tree_base", ["ENT_TYPE_FLOOR_TREE_BASE"]],
  ["giantclam", ["ENT_TYPE_ACTIVEFLOOR_GIANTCLAM_BASE", {
    "box": [2, 2]
  }]],
  ["dog_sign", ["ENT_TYPE_FLOOR_PLATFORM", {
      "box": [2, 1]
    }],
    ["ENT_TYPE_FLOOR_PLATFORM", {
      "offset": [1, 0]
    }],
    ["ENT_TYPE_DECORATION_BASECAMPDOGSIGN", {
      "offset": [-0.41, -0.32]
    }]
  ],
  ["construction_sign", ["ENT_TYPE_ITEM_CONSTRUCTION_SIGN"]],
  ["minewood_floor_noreplace", ["ENT_TYPE_FLOORSTYLED_MINEWOOD"]],
  ["cavemanboss", ["ENT_TYPE_MONS_CAVEMAN_BOSS", {
    "box": [2, 2]
  }]],
  ["idol_floor", ["ENT_TYPE_FLOOR_IDOL_BLOCK"]],
  ["lockedchest", ["ENT_TYPE_ITEM_LOCKEDCHEST", {
    "box": [2, 1],
    "offset": [0.5, 0]
  }]],
  ["palace_chandelier", ['ENT_TYPE_DECORATION_PALACE_CHANDELIER', {box: [3, 2]}]]
];
  const tiles = known.map(([name, ...entry]) =>
    entry.map(([id, _, index]) => entities.tileForEntity(id, {index, count: 1})));

  const resolves = known.map(async (value, i) => {
    const img = svg('image');
    const canvas = elem('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 0x80 * (value[1][1]?.box ? value[1][1]?.box[0] : 1);
    await tiles[i][0].load();
    canvas.height = tiles[i][0].texture.height;

    for (let j = 0; j < tiles[i].length; j++) {
      let tile = tiles[i][j];
      await tile.load();
      let options = value[j + 1][1];
      let pos = options?.offset || [0, 0];
      tile.draw(ctx, options?.index, options?.count, [pos[0] * 0x80, pos[1] * 0x80]);
    }

    knownTiles.set(value[0], [img, value[1][1]?.box || [1, 1]])

    await new Promise(resolve => {
      canvas.toBlob(texture => {
        img.setAttributeNS(null, 'href', URL.createObjectURL(texture));
        resolve();
      });
    });
  })

  await Promise.all(resolves);
};

const json = async (path) => {
  const res = await fetch(path);
  return await res.json();
};

const text = async (path) => {
  const res = await fetch(path);
  return await res.text();
};

const elem = (tag, options = {}, children = []) => {
  const res = document.createElement(tag);
  Object.assign(res, options);
  if (options.name)
    res.setAttribute('name', options.name);
  res.append(...children);
  return res;
};

const svg = (tag, options = {}, children = []) => {
  const res = document.createElementNS(SVG_NS, tag);
  Object.keys(options).forEach(key => {
    res.setAttributeNS(null, key, options[key]);
  })
  res.append(...children);
  return res;
}

const viewer = (name) => {
  return document.querySelector(`#viewer [name=${name}]`);
};

class OneScene {
  constructor(scenes, level) {
    this.scenes = scenes;
    this.level = level;
    this.attributes = {
      //  !dual   The next template contains both a frontal and back room
      dual: false,
      //  !flip   Flip the following template to make another. i.e. The following template = two templates.
      flip: false,
      //  !hard   The next template is hard (only appear in the second two levels of the area).
      hard: false,
      //  !ignore   Ignore the following template. This is to make building rooms easier.
      ignore: false,
      //  !liquid   The next template contains liquid (used to limit the number of liquid drops)
      liquid: false,
      //  !onlyflip Flip the following template (original is ignored)
      onlyflip: false,
      purge: false,
      //  !rare   The next template is rare (only 5% chance of a rare template being used).
      rare: false,
    };
    this.lines = [];
  }

  flags() {
    const flags = new Set();
    for (const key in this.attributes) {
      if (this.attributes[key]) flags.add(key);
    }
    return flags;
  }
  addLine(line) {
    this.lines.push(line);
  }

  render(dom) {
    const scene = [];
    let width = this.scenes.width;
    let dual = this.flags().has("dual");
    if (dual) {
      width = width * 2 + 1;
    }
    let sceneMap = new Map();
    for (let y = 0; y < this.scenes.height; y++) {
      for (let x = 0; x < width; x++) {
        const names =
          this.level.invTiles.get(this.lines[y][x]) || this.lines[y][x];
        const [name0, probability, name1] = names.split('%');
        for (const name of name1 ? [name0, name1] : [name0]) {
          let element, shapes, size = [1, 1], offset = 0;
          if ({
            "chunk_door": true,
            "chunk_air": true,
            "chunk_ground": true
          }[name]) {
            // Reference to other tiles
            let text = svg("text", {});
            text.textContent = name;

            let rect = svg("rect", {class: "ref"}, []);
            let g = svg("g", {}, shapes=[rect, text]);

            element = svg("a", {
              href: "#" + this.level.sceneMap.get(name).join("!"), class: "tile ref btn btn-primary",
            }, [g]);

            size = screen_size(name) || size;
          } else if (knownTiles.has(name)) {
            let tile;
            [tile, size] = knownTiles.get(name);
            shapes = [element = tile.cloneNode()];
          } else if (this.lines[y][x] === ' ') {
            shapes = [element = svg("rect", { class: "tile separator" })];
          } else if (name === 'empty') {
            continue;
          } else {
            let text = svg("text", { });
            text.textContent = name
            let rect = svg("rect", {}, [text]);
            element = svg("g", {}, [rect, text]);
            shapes = [rect, text];
          }
          const attributes = {
            width: `${size[0] * CHUNK_SIZE}`,
            height: `${size[1] * CHUNK_SIZE}`,
            x: `${x * CHUNK_SIZE}`,
            y: `${y * CHUNK_SIZE}`,
            opacity: (probability || 100) * 0.01
          }
          element.classList.add("tile");
          shapes.forEach(shape=>Object.keys(attributes).forEach(key=>shape.setAttributeNS(null, key, attributes[key])));
          // element.tabIndex = 1;
          let title = svg("title");
          title.textContent = names;

          scene.push(svg("g", {}, [element, title]));
          // sceneMap.set(`${x}-${y}`, element);
        }
      }
    }
    const scene_ = document.createElementNS(SVG_NS, "svg");
    scene_.setAttributeNS(null, "class", "scene")
    scene_.append(...scene);
    scene_.setAttribute('width', width * CHUNK_SIZE)
    scene_.setAttribute('height', this.scenes.height * CHUNK_SIZE)
    scene_.setAttribute('xmlns', "http://www.w3.org/2000/svg")

    scene_.onmousemove = (event) => {
      let [x, y] = [event.offsetX / CHUNK_SIZE | 0, event.offsetY / CHUNK_SIZE | 0];
      let elem = sceneMap.get(`${x}-${y}`);
      if(elem)
        scene_.append(elem);
    }
    dom.append(scene_);
  }
}

const screen_size = (name) => {
  let size;
  if (name.startsWith("setroom")) {
    size = [10, 8];
  } else if (datasheet.items[name] !== undefined) {
    const id = datasheet.items[name];
    if (id === 18) {
      size = [6, 3];
    } else if (id >= 14 && id <= 15) {
      size = [5, 5];
    } else if (id >= 102 && id <= 106) {
      size = [20, 16];
    } else if (id >= 107 && id <= 108) {
      size = [20, 8];
    } else if (id >= 109 && id <= 110) {
      size = [10, 16];
    } else if (id >= 16 && id <= 17) {
      size = [5, 3];
    }
  }
  return size;
}

class Scenes {
  constructor(name, level) {
    this.level = level;
    this.lines = [];
    this.width = 0;
    this.height = 0;

    [this.width, this.height] = screen_size(name) || [10, 8];
  }

  flushIfNeeded() {
    let last_lines = this.lines[this.lines.length - 1];
    if (
      this.lines.length === 0 ||
      last_lines.lines.length === this.height
    ) {
      last_lines = new OneScene(this, this.level);
      this.lines.push(last_lines);
    }
    return last_lines;
  }

  addLine(line) {
    const last_lines = this.flushIfNeeded();
    last_lines.addLine(line);
  }

  addAttribute(name) {
    const one_scene = this.flushIfNeeded();
    if (one_scene.attributes.hasOwnProperty(name))
      one_scene.attributes[name] = true;
  }

  render(dom) {
    const line_ = elem("div");
    this.lines.forEach((x) => x.render(line_));
    dom.append(line_);
  }
}

class Level {
  constructor(path) {
    const { blocks, items, bestiary, chances } = datasheet;
    [this.width, this.height] = [0, 0];

    this.back_room_chance = 5;
    this.back_room_interconnection_chance = 20;
    this.back_room_hidden_door_chance = 500;
    this.back_room_hidden_door_cache_chance = 1000;
    this.mount_chance = 5000;
    this.altar_room_chance = 14;
    this.idol_room_chance = 10;
    this.floor_side_spread_chance = 10;
    this.floor_bottom_spread_chance = 5;
    this.background_chance = 1;
    this.ground_background_chance = 1;
    this.machine_bigroom_chance = 0;
    this.machine_wideroom_chance = 0;
    this.machine_tallroom_chance = 0;
    this.machine_rewardroom_chance = 0;
    this.max_liquid_particles = 0;
    this.flagged_liquid_rooms = 0;

    this.tiles = new Map();
    this.invTiles = new Map();
    this.monsterChances = [];
    this.levelChances = [];
    this.scenes = [];
    this.sceneMap = new Map();

    this.path = path;
  }

  setSize(size) {
    [this.width, this.height] = size;
  }

  setTile(name, letter) {
    this.tiles.set(name, letter);
    this.invTiles.set(letter, name);
  }

  addMonsterChances(name, values) {
    this.monsterChances.push([name, values]);
  }

  addLevelChances(name, values) {
    this.levelChances.push([name, values]);
  }

  render() {
    const dom_element = viewer("level");
    const list_elem = elem("nav", { className: "nav" });
    const tiles = elem("div", {
      innerText: [...this.tiles.entries()]
        .map((x) => `${x[1]}: ${x[0]}`)
        .join("\n"),
      className: "tiles",
    });

    const scenes_ = [];

    for (const [name, scene, path] of this.scenes) {
      // Don't print base maps
      if (path != this.path) continue;

      list_elem.append(
        elem("a", { innerText: name, className: "nav-link", href: "#" + this.path + "!" + name })
      );

      const scene_ = elem("div");
      scenes_.push(scene_);

      scene_.append(elem("a", { name: this.path + "!" + name }));
      scene_.append(elem("h2", { innerText: `Name: ${name}` }));
      for (const line of scene.lines) {
        const metadata = elem("p", {
          innerText: `Flags: ${[...line.flags().values()]}\n`,
        });
        scene_.append(metadata);
        line.render(scene_);
      }
    }

    dom_element.innerHTML = "";
    dom_element.appendChild(list_elem);
    dom_element.appendChild(tiles);
    dom_element.append(...scenes_);

    viewer("path").innerText = this.path;
    viewer("metadata").value = JSON.stringify({
      levelChances: this.levelChances,
      monsterChances: this.monsterChances,
      "back_room_chance": this.back_room_chance,
      "back_room_interconnection_chance": this.back_room_interconnection_chance,
      "back_room_hidden_door_chance": this.back_room_hidden_door_chance,
      "back_room_hidden_door_cache_chance": this.back_room_hidden_door_cache_chance,
      "mount_chance": this.mount_chance,
      "altar_room_chance": this.altar_room_chance,
      "idol_room_chance": this.idol_room_chance,
      "floor_side_spread_chance": this.floor_side_spread_chance,
      "floor_bottom_spread_chance": this.floor_bottom_spread_chance,
      "background_chance": this.background_chance,
      "ground_background_chance": this.ground_background_chance,
      "machine_bigroom_chance": this.machine_bigroom_chance,
      "machine_wideroom_chance": this.machine_wideroom_chance,
      "machine_tallroom_chance": this.machine_tallroom_chance,
      "machine_rewardroom_chance": this.machine_rewardroom_chance,
      "max_liquid_particles": this.max_liquid_particles,
      "flagged_liquid_rooms": this.flagged_liquid_rooms
    })
  }

  addScene(name, path) {
    const scene = new Scenes(name, this);
    this.scenes.push([name, scene, path]);
    this.sceneMap.set(name, [path, name]);
    return scene;
  }
}

let levels = [];
let level = null; // Level

const main = async () => {
  const populateList = async () => {
    const wasEmpty = levels.length === 0;
    levels = await json("/levels.json");
    // levels = levels.filter((x) => !x.startsWith("Arena"));
    list.innerHTML = "";
    list.append(
      ...levels.map((level) => {
        return elem("a", {
          className: "list-group-item list-group-item-action",
          href: "#" + level,
          innerText: level
        });
      })
    );

    if (wasEmpty && location.hash.length <= 1) selectLevel(levels[0]);
  };

  const selectLevel = async (path, scene) => {
    const active = document.querySelector("#list > a.active");
    if (active) active.classList.remove("active");

    const target = document.querySelector(
      '#list > a[href="#' + path + '"]'
    );
    target.classList.add("active");

    const parse = async (res, path) => {
      // Let's parse the level
      const lines = res.split("\n");
      let current_scene = null;
      for (let line of lines) {
        // Skip comments
        line = line.split("//")[0];

        // Skip empty lines
        line = line.trim();
        if (line.length === 0) continue;

        // Commands
        if (line.startsWith("\\")) {
          const cmd = line.split(" ")[0].slice(1);

          // Dash commands
          switch (cmd[0]) {
            case "-": {
              // Level parameters
              const subcmd = cmd.slice(1);
              const args = scanf(line);
              if (cmd === "-size") {
                level.setSize(args);
              } else if (level.hasOwnProperty(subcmd)) {
                level[subcmd] = args[0];
              } else {
                console.log("Unsupported command: " + line);
                continue;
              }
              break;
            }
            case "?": {
              // Tile codes
              line = line.replace(/\s+/, " ");
              const [name, letter] = line.slice(2).split(" ");
              level.setTile(name, letter);
              break;
            }
            case "+": {
              // Monster chances
              line = line.replace(/\s+/, " ");
              const [name, ...prob] = line.split(" ");
              level.addMonsterChances(
                name.slice(2),
                prob.join(" ").split(",").map((x) => parseInt(x))
              );
              break;
            }
            case "%": {
              // Level chances
              line = line.replace(/\s+/, " ");
              const [name, ...prob] = line.split(" ");
              level.addLevelChances(
                name.slice(2),
                prob.join(" ").split(",").map((x) => parseInt(x))
              );
              break;
            }
            case "!": {
              const subcmd = cmd.slice(1);
              current_scene.addAttribute(subcmd);
              break;
            }
            case ".": {
              const mode = cmd.slice(1);
              current_scene = level.addScene(mode, path);
              break;
            }
            default: {
              console.warn("Unsupported command: " + line);
            }
          }
        } else {
          current_scene.addLine(line);
        }
      }
    };

    level = new Level(path);

    let base = "generic.lvl";
    if (path.startsWith("basecamp_")) base = "basecamp.lvl";

    if(path !== base) {
      parse(await text("Levels/" + base), base);
    } else {
      parse(await text("Levels/dwellingarea.lvl"), "dwellingarea.lvl");
    }

    if (path.startsWith("blackmarket"))
      parse(await text("Levels/junglearea.lvl"), "junglearea.lvl");

    if (path.startsWith("hallofushabti"))
      parse(await text("Levels/babylonarea.lvl"), "babylonarea.lvl");

    if (path.startsWith("lake")) {
      parse(await text("Levels/tidepoolarea.lvl"), "tidepoolarea.lvl");
    }

    if(path.startsWith("vlad")) {
      parse(await text("Levels/volcanoarea.lvl"), "volcanoarea.lvl");
    }

    if(path.startsWith('babylonarea_')) {
      parse(await text("Levels/babylonarea.lvl"), "babylonarea.lvl");
    }

    if(path.startsWith('ending_hard')) {
      parse(await text("Levels/ending.lvl"), "ending.lvl");
    }

    if (path.startsWith("challenge_")) {
      const challenge = new Map([
        ["moon", "junglearea"],
        ["star", "tidepoolarea"],
        ["sun", "sunkencityarea"]
      ]).get(path.split('_')[1].split('.')[0]) + ".lvl";
      parse(await text("Levels/" + challenge), challenge);
    }

    parse(await text("Levels/" + path), path);

    // Then render!
    level.render();

    // Focus on scene
    if(scene)
      document.querySelector('[name="' + path + (scene ? "!" + scene : "") + '"]').scrollIntoView();

    // For debugging
    self.level = level;
  };

  const scanf = (line) => {
    return line
      .split(" ")
      .slice(1)
      .map((x) => parseInt(x));
  };

  window.onhashchange = () => {
    if (location.hash.length > 1) {
      const [path, scene] = location.hash.slice(1).split('!');
      selectLevel(path, scene);
    }
  }

  await entities.populateList();
  await loadKnownTiles();
  await populateList();
  onhashchange();
};

onload = main;