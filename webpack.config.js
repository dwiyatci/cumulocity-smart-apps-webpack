/**
 * Created by glenn on 07.05.17.
 * Last updated on 31.10.17.
 */

const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const config = {
  entry: {
    app: './src/app.js',
    vendor: [
      /**
       * Cumulocity UI core SDK (8.x).
       */
      'cumulocity-clients-javascript/build/main-standalone.js',

      /**
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
    filename: ifProd('[name].[chunkhash].js', '[name].js'),
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
        test: /bootstrap-sass\/assets\/javascripts\//,
        use: 'imports-loader?jQuery=>window.jQuery',
      },
      {
        test: /\.js$/,
        include: [
          resolve(__dirname, 'src'),
        ],
        use: [
          {
            // https://webpack.js.org/loaders/babel-loader
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' }),
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
  plugins: [
    // Code Splitting - CSS
    new ExtractTextPlugin(ifProd('[name].[chunkhash].css', '[name].css')),

    // Code Splitting - Libraries
    new webpack.optimize.CommonsChunkPlugin({
      // https://stackoverflow.com/q/39548175/2013891
      // The order of this array matters.
      names: [
        'polyfills',
        'vendor',
        'manifest',
      ],
    }),

    // Caching
    new HtmlWebpackPlugin({ template: './src/index.ejs' }),
    new InlineManifestWebpackPlugin(),

    ...ifProd(
      [
        // Building for Production
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
      ],
      [
        new webpack.NoEmitOnErrorsPlugin(),

        // HMR
        new webpack.HotModuleReplacementPlugin(),
      ]
    ),

    // Scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devtool: ifProd('source-map', 'eval'),
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

function ifProd(prodStuff, devStuff) {
  return (process.env.NODE_ENV === 'production') ? prodStuff : devStuff;
}

module.exports = config;
