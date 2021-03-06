const rollup = require('rollup')

rollup
  .rollup({
    entry: 'src/index.js',
    plugins: [
      require('rollup-plugin-node-resolve')()
    ]
  })
  .then(bundle => {
    bundle.write({
      dest: 'dist/index.js',
      format: 'cjs'
    })
    bundle.write({
      dest: 'dist/index.mjs',
      format: 'es'
    })
  })
