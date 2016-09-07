module.exports = {  
  entry: './src/tap.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, exclude: /node_module/, loader: 'ts-loader' },
      { test: /\.js$/, loader: 'uglify-loader' }
    ]
  }
}