const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');

module.exports = withPlugins([[withCSS, {
  cssLoaderOptions: {
    url: false
  }
}], withImages, withFonts, withVideos], {});