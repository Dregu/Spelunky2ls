import datasheet from "./data.js";
const knownTiles = new Map();
const CHUNK_SIZE = 48;

const tileForTexture = async (i) => {
  let multiple = typeof i === 'object';
  return await datasheet.LoadTexture(i)
};

const tileForEntity = (entity_name, {index, count, theme}) => {
  const entity = entitiesMap.get(entity_name);
  const texture_set = new TextureSet(entity, theme);
  return texture_set;
}

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

const viewer = (name) => {
  return document.querySelector(`#viewer [name=${name}]`);
};

class TextureSet {
  constructor(entity, theme='JungleArea') {
    let texture_id = entity['Texture ID'], additional = entity['Additional']
    if (texture_id < -2) {
      let new_id = datasheet.specific_textures[theme][-texture_id];
      if (new_id !== undefined) {
        texture_id = new_id;
      }
    }
    this.id = texture_id;
    this.additional = additional;
    this.tile_pos = [entity['Tile X'], entity['Tile Y']]
    this.texture = null;
  }

  async load() {
    if(!this.texture)
      this.texture = await tileForTexture(this.id);
  }

  async getDOM(index, count) {
    await this.load();

    const canvas = document.createElement("canvas");
    // Per-tile size
    canvas.width = this.texture.width * (count || 1);
    canvas.height = this.texture.height;

    const ctx = canvas.getContext("2d");
    this.draw(ctx, index, count);

    const blob = await new Promise(resolve => canvas.toBlob(resolve));
    const cache = new Image();
    cache.src = URL.createObjectURL(blob)

    return () => {
      return cache.cloneNode();
    };
  }

  draw(ctx, index, frames, pos) {
    if (!this.texture) {
      throw Error("Load textures first!");
    }

    if (index === undefined)
      index = Object.keys(this.additional).length ? this.additional[
        this.additional[0] !== undefined ? 0 : Object.keys(this.additional)[0]
      ][0] : this.tile_pos;

    const [x, y] = pos || [0, 0];

    const row = this.texture.tWidth / this.texture.width | 0;
    if (typeof index === 'object')
      index = index[1] * row + index[0];

    const count = frames === undefined ? 1 : Math.abs(frames);
    const multiplier = frames < 0 ? -1 : 1;

    for (var i = 0; i < count; i++) {
      const [sx_, sy_] = [(index % row), ((index / row) | 0)];
      const sx = sx_ * this.texture.width;
      const sy = sy_ * this.texture.height;
      this.texture.draw(ctx, this.texture.width * i + x, y, sx, sy);
      index += multiplier;
    }
  }
};

class Level {
  constructor(name) {
    this.name = name;
    this.property = entitiesMap.get(name);
  }

  render() {
    const dom_element = viewer("entity");
    const scenes_ = [];

    for (const name in this.property) {
      if (name === 'Additional')
        continue;

      const value = this.property[name];
      const scene_ = elem("tr");
      scenes_.push(scene_);

      scene_.append(elem("a", { name: this.name + "!" + name }));
      scene_.append(elem("td", { innerText: `${name}`, width: '30%' }),
        elem("td", { innerText: `${value}` }));
    }

    const additional = viewer("additional")
    const texture = new TextureSet(this.property);
    additional.innerText = '';
    for (const name in texture.additional) {
      const value = texture.additional[name];
      const oneTile = elem("li", { innerText: `${name}:` })
      texture.getDOM(value[0], value[1]).then((dom =>
        oneTile.append(dom(), document.createTextNode(`${value}`))))
      additional.append(oneTile)
    }

    dom_element.innerHTML = "";
    dom_element.append(...scenes_);

    const tile = viewer("tile");
    tile.innerText = '';

    if (texture.id >= 0 && Object.keys(this.property['Additional']).length === 0) {
      texture.getDOM().then((texture => {
        tile.innerText = '';
        tile.append(elem('div', { innerText: 'Texture (single):' }))
        tile.append(texture())
      }));
    }
    viewer("path").innerText = this.name;
  }
}

let entities = [];
let entitiesMap = new Map();
let level = null; // Level

const populateList = async (dom) => {
  entities = await json("/entities.json");
  entities.sort((x, y) => {
    if (x.ID < y.ID)
      return -1;
    if (x.ID > y.ID)
      return 1;
    return 0;
  });
  entities.forEach(entity => entitiesMap.set(entity['Name'], entity));
  if (dom) {
    list.innerHTML = "";
    list.append(
      ...entities.map((entity) => {
        return elem("a", {
          className: "list-group-item list-group-item-action",
          href: "#" + entity['Name'],
          innerText: entity['Name']
        });
      })
    );
  }
};

let firstTime = true;

const main = async () => {
  const selectLevel = async (path) => {
    const active = document.querySelector("#list > a.active");
    if (active) active.classList.remove("active");

    const target = document.querySelector(
      '#list > a[href="#' + path + '"]'
    );
    target.classList.add("active");

    if (firstTime) {
      target.scrollIntoView();
      firstTime = false;
    }

    level = new Level(path);

    // Then render!
    level.render();

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
      const path = location.hash.slice(1);
      selectLevel(path);
    }
  }

  await populateList(true);

  if (location.hash.length <= 1)
    selectLevel(entities[0].Name);
  else
    onhashchange();
};

export default { main, populateList, tileForTexture, tileForEntity };