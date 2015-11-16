var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLOptions = {
   title: 'RawJSBenchmark',
   template: 'template-pictures.html',
   inject: 'body'
}

module.exports = {
  entry: './src/index.ts',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
    { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin(HTMLOptions)]
}
