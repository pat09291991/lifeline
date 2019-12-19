const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[withCSS, {
  cssLoaderOptions: {
    url: false
  }
}], withImages, withFonts], {});