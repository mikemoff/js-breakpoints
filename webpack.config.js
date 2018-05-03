const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const root_dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: ['./src/application.js'],
  output: {
    filename: 'bundle.js',
    path: root_dist
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000
  },
  module: {
    rules: [
      // js, es6 processing
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.font\.js$/,
        use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
        'webfonts-loader'
        ]
      },
      // styles processing
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/templates/index.pug'
    }),
    new MiniCssExtractPlugin({
      filename: './styles/app.css'
    }),
    new ExtractTextPlugin('./styles/font-icons.css')
  ]
}
