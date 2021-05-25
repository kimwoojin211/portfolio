const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: ['./src/js/index.js', './src/css/styles.css'],
    projects: ['./src/js/projects.js', './src/css/projects.css'],
    cv: ['./src/js/cv.js', './src/css/cv.css'],
    twitch: ['./src/js/twitch.js', './src/css/twitch.css']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      inject: 'body', minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html',
      filename: 'projects.html',
      chunks: ['projects'],
      inject: 'body', minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/cv.html',
      filename: 'cv.html',
      chunks: ['cv'],
      inject: 'body', minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/twitch.html',
      filename: 'twitch.html',
      chunks: ['twitch'],
      inject: 'body', minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(gif|png|jpe?g|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },

    ]
  }
};