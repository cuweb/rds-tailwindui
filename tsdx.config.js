const images = require('@rollup/plugin-image');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ include: ['**/**/*.svg'] }),
      postcss({
        inject: false,
        extract: !!options.writeMeta,
      }),
      ...config.plugins,
    ]
    return config
  },
}