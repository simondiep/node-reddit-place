require('ignore-styles');

require('@babel/register')({
  "plugins": ["@babel/plugin-proposal-class-properties"],
  "presets": ["@babel/preset-env", "@babel/preset-react"]
});

require('./index');