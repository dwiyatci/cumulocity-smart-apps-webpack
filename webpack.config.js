/**
 * Created by glenn on 07.05.17.
 */

const { compact } = require('lodash');
const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const prodEnabled = process.env.NODE_ENV === 'production';
const config = {
  entry: {
    app: './src/app.js',
    vendor: [
      /*
       * Cumulocity UI core SDK (8.x).
       */
      'cumulocity-clients-javascript/build/main-standalone.js',

      /*
       * Other vendor dependencies for this amazing project.
       */
      'bootstrap-loader',
      'angular-route',
      'angular-ui-bootstrap/dist/ui-bootstrap.js',
      'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    ],
    polyfills: [
      'babel-polyfill',
    ],
  },
  output: {
    filename: prodEnabled ? '[name].[chunkhash].js' : '[name].js',
    path: resolve(__dirname, 'assets'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /cumulocity-clients-javascript/,
        use: 'script-loader',
      },
      // Bootstrap 3
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        use: 'imports-loader?jQuery=>window.jQuery',
      },
      {
        test: /\.js$/,
        include: [
          resolve(__dirname, 'src'),
        ],
        use: [
          //{ loader: 'ng-annotate-loader' },
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }]],
              plugins: ['transform-runtime', 'angularjs-annotate'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=8192',
      },
      {
        test: /\.(woff2?|svg)$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: compact([
    // Code Splitting - CSS
    new ExtractTextPlugin(prodEnabled ? '[name].[chunkhash].css' : '[name].css'),

    // Code Splitting - Libraries
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'polyfills',
        'vendor',
        'manifest',
      ],
      minChunks: Infinity,
    }),

    // Building for Production
    prodEnabled && new webpack.LoaderOptionsPlugin({ minimize: true }),
    prodEnabled && new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

    // Caching
    new HtmlWebpackPlugin({ template: './src/index.ejs' }),
    new InlineManifestWebpackPlugin({ name: 'webpackManifest' }),

    // HMR
    !prodEnabled && new webpack.HotModuleReplacementPlugin(),
  ]),
  devtool: prodEnabled ? 'source-map' : 'eval',
  resolve: {
    modules: [
      'node_modules',
      resolve(__dirname, 'src'),
    ],
  },
  devServer: {
    contentBase: resolve(__dirname, 'assets'),
    compress: true,
    noInfo: true,
    historyApiFallback: true,
    hot: true,
    https: true,
  },
};

module.exports = config;
