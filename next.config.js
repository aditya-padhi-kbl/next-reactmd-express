const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  [withCSS, {
      cssModules: false
  }],
  [withImages]
], {distDir: 'dist'});