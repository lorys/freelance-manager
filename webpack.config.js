module.exports = {
    entry: './src/index.js',
    target: 'node',
    node: { global: true },
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'backend.js'
    }
  }