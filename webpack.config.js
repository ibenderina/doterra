const path = require(`path`);
const webpack = require(`webpack`);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`)
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
      }
    ],
  },
  resolve: {
    modules: [`node_modules`, path.resolve(path.join(__dirname, `src/components`))],
    extensions: [`.js`, `.json`],
    // alias: {
    //   '@components': path.resolve(__dirname, `src/components`),
    //   '@utils': path.resolve(__dirname, `src/utils`),
    //   '@root': path.resolve(__dirname, `src`),
    // }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
    }),
    new ExtractTextPlugin({filename: 'style.css'}),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/img", to: "img" },
      ],
    })
  ],
};
