const anime = require("../database/anime.json");
const nsfw = require("../database/nsfw.json");

const random = () => {
  return {
    anime: anime[Math.floor(Math.random() * anime.length)],
    nsfw: nsfw[Math.floor(Math.random() * nsfw.length)]
  }
}

module.exports = random
