require('rollup')
  .rollup({entry: 'src/index.js'})
  .then(bundle => {
    bundle.write({
      dest: 'dist/index.js',
      format: 'cjs' // CommonJS module
    })
    bundle.write({
      dest: 'dist/index.mjs',
      format: 'es' // ES6 module
    })
  })
