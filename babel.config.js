module.exports = {
  presets: [
    [ '@babel/env', { "targets": { "node": "10" } } ],
    '@babel/typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
  ],
};
