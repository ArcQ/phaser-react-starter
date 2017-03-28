const path = require('path');

module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb'
  ],
  'plugins': [
    'babel',
    'react',
    'promise',
    'jest'
  ],
  'env': {
    'browser' : true
  },
  'globals': {
    'createjs': true,
    'Phaser': true,
    'PIXI': true,
    'p2': true,
  },
  'settings': {
    'import/resolver': {
      'node':{
        'moduleDirectory': [
          path.resolve('src'),
          path.resolve('node_modules'),
          path.resolve('lib'),
        ]
      }
    }
  },
  'rules': {
    'jsx-quotes': [2, 'prefer-single'],
    'max-len': [1, 100, 2],
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-mixed-operators': 1,
    'no-underscore-dangle': 0,
    'import/no-unresolved': [2,{'ignore':[ 'rxjs']}],
    'func-names':0,
    // temporary since webpack-resolver not working with aliases in webpack2
    'import/no-extraneous-dependencies':0,
    // exception for class methods for phaser api
    'class-methods-use-this':0,
  },
}
