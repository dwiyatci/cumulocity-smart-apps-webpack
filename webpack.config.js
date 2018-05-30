/**
 * Created by glenn on 07.05.17.
 * Last updated on 17.05.18.
 */

const { resolve } = require('path');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const config = {
    mode: eitherDevOrProd('development', 'production'),
    entry: './src/app.js',
    // entry: {
    //   app: './src/app.js',
    //   vendor: [
    //     /**
    //      * Cumulocity UI core SDK (8.x).
    //      */
    //     'cumulocity-clients-javascript/build/main-standalone.js',
    //
    //     /**
    //      * Other vendor dependencies for this amazing project.
    //      */
    //     'bootstrap-loader',
    //     'angular-route',
    //     'angular-ui-bootstrap/dist/ui-bootstrap.js',
    //     'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    //   ],
    //   polyfills: [
    //     'babel-polyfill',
    //   ],
    // },
    output: {
      filename: eitherDevOrProd('[name].js', '[name].[chunkhash].js'),
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
          test: /\.json$/,
          type: 'json',
        },
        {
          test: /\.css$/,
          // use: ['style-loader', 'css-loader'],
          // use: ExtractTextPlugin.extract({
          //   use: 'css-loader',
          //   fallback: 'style-loader',
          // }),
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
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
      // new ExtractTextPlugin(eitherDevOrProd('[name].css', '[name].[chunkhash].css')),
      new MiniCssExtractPlugin({
        filename: eitherDevOrProd('[name].css', '[name].[chunkhash].css'),
      }),

      // Caching
      new HtmlWebpackPlugin({ template: './src/index.ejs' }),
    ],
    optimization: {
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      splitChunks: {
        chunks: 'all',
        // name: false,
      },
      runtimeChunk: true,
    },
    resolve: {
      modules: [
        resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
    devServer: {
      contentBase: resolve(__dirname, 'assets'),
      compress: true,
      noInfo: false,
      historyApiFallback: true,
      https: true,
    },
  };

  return config;

  function eitherDevOrProd(devStuff, prodStuff) {
    return (env && env.production) ? prodStuff : devStuff;
  }
};
