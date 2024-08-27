// config-overrides.js
const { override, addBabelPreset } = require('customize-cra');

module.exports = override(
  addBabelPreset('@babel/preset-react')
  // Add more customization as needed
);
