const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: './src/js/index.js',
    // projects: './src/js/projects.js',
    // cv: './src/js/cv.js',
    // shared: './src/js/nav.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: '.src/js/index.js',
      inject: 'body', minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }), 
    // new HtmlWebpackPlugin({
    //   template: './src/projects.html',
    //   filename: 'projects.html',
    //   chunks: '.src/js/project.js',
    //   inject: 'body', minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/cv.html',
    //   filename: 'cv.html',
    //   chunks: '.src/js/cv.js',
    //   inject: 'body', minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   }
    // }),
    new Dotenv()
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