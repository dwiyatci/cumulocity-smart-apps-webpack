/**
 * Created by glenn on 8/5/16.
 */

const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
  const prodEnabled = env && env.prod;

  return {
    devtool: prodEnabled ? 'source-map' : 'eval',
    resolve: {
      modules: [
        'node_modules',
        resolve(__dirname, 'src'),
      ],
      extensions: ['', '.js', '.css', '.html', '.json'],
      alias: {
        'ng-file-upload': resolve(__dirname, 'bower_components/ng-file-upload/angular-file-upload'),
        'cometd-javascript': resolve(__dirname, 'bower_components/cometd-jquery/cometd-javascript/common/src/main/js/org/cometd'),
        'cometd-jquery': resolve(__dirname, 'bower_components/cometd-jquery/cometd-javascript/jquery/src/main/webapp/jquery'),
        'cumulocity-clients-javascript': resolve(__dirname, 'bower_components/cumulocity-clients-javascript/build'),
        'angular-route': resolve(__dirname, 'bower_components/angular-route/angular-route'),
        'angular-ui-bootstrap-bower': resolve(__dirname, 'bower_components/angular-ui-bootstrap-bower'),
      },
    },
    entry: {
      vendor: [

        /*
         * Cumulocity UI core SDK (6.3.x) vendor dependencies
         */
        'bootstrap-loader',
        'lodash',
        'jquery',
        'moment',
        'angular',
        'ng-file-upload',
        'd3',
        'cometd-javascript/cometd-namespace',
        'cometd-javascript/cometd-json',
        'cometd-javascript/Cometd',
        'cometd-javascript/Utils',
        'cometd-javascript/TransportRegistry',
        'cometd-javascript/Transport',
        'cometd-javascript/RequestTransport',
        'cometd-javascript/LongPollingTransport',
        'cometd-javascript/CallbackPollingTransport',
        'cometd-javascript/WebSocketTransport',
        'cometd-jquery/jquery.cometd',

        /*
         * Cumulocity UI core SDK (6.3.x)
         */
        //'cumulocity-clients-javascript/main.css',
        'cumulocity-clients-javascript/main.js',

        /*
         * This project vendor dependencies
         */
        'angular-route',
        'angular-ui-bootstrap-bower/ui-bootstrap',
        'angular-ui-bootstrap-bower/ui-bootstrap-tpls',
      ],
      app: [
        'babel-polyfill',
        './src/index.js',
      ],
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }),

      new HtmlWebpackPlugin({
        template: './src/index.html',
        //favicon: './src/favicon.ico',
        filename: 'index.html',
      }),

      new ExtractTextPlugin('[name].css'),

      new webpack.ProvidePlugin({
        //$: 'jquery',
        //jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: [
            resolve(__dirname, 'src'),
          ],
          exclude: [
            resolve(__dirname, 'src/vendor'),
          ],
          loader: 'babel',
          query: {
            //presets: ['es2015-webpack', 'stage-2'],
            presets: ['es2015', 'stage-2'],
            plugins: ['transform-runtime'],
          },
        },
        {
          test: /org\/cometd/,
          loader: 'imports?this=>window',
        },
        {
          test: /jquery\.cometd\.js$/,
          loader: 'imports?this=>window,define=>false,jQuery=jquery',
        },
        {
          test: /cumulocity-clients-javascript/,
          loader: 'imports?$=jquery,moment,d3',
        },
        // Bootstrap 3
        {
          test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
          loader: 'imports?jQuery=jquery',
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: 'css',
          }),
        },
        // the url-loader uses DataUrls.
        // the file-loader emits files.
        {
          test: /\.(woff2?|svg)$/,
          loader: 'url?limit=10000',
        },
        {
          test: /\.(ttf|eot)$/,
          loader: 'file',
        },
        {
          test: /\.(png|gif|jpg)$/,
          loader: 'url?limit=8192',
        },
        {
          test: /\.html$/,
          include: [
            resolve(__dirname, 'src'),
          ],
          loader: 'html',
        },
        {
          test: /\.json$/,
          include: [
            resolve(__dirname, 'src'),
          ],
          loader: 'json',
        },
      ],
    },
    devServer: {
      contentBase: 'dist/',
      noInfo: true,
      historyApiFallback: true,
      //proxy: {
      //  '/*': {
      //    target: 'http://glenn.cumulocity.com',
      //  },
      //},
    },
  };
};
