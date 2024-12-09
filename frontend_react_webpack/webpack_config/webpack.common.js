const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var webpack = require('webpack');

const paths = require('./paths');

// const dotenv = require('dotenv')
// dotenv.config();
const { _env } = require('../config/env');
// const variables = require('./meta_head_word.json');


console.log('ENV_EVENT::', process.env);

const IMAGE_SIZE_LIMIT = 10000;
module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    /*  new ESLintPlugin(), */
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Hyper Resources',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      /* template: paths.public + '/index.html', */
      filename: 'index.html', // output file
      // favWord: variables.description,
      // templateParameters: {
      //   some_variable: process.env.REACT_APP_PORT,
      // },
      // templateParameters:require('path/to/data.json')
    }),
    // Used this for to avoid or without using implements "import React from 'react'" 
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    /**
       * https://stackoverflow.com/questions/48748054/how-to-set-multiple-env-variables-for-webpack
       * Webpack doesn't have access to env variables after the build is done, so you need to expose those variables by adding this into Webpack config into plugins:
       */
    new webpack.DefinePlugin({
      'ENV': _env,
      'ENV_1':  JSON.stringify(process.env.REACT_APP_HELLO_1),
      'ENV_2':  JSON.stringify(process.env.REACT_APP_HELLO_2),
      'ENV_EVENT': JSON.stringify(process.env)
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      // { test: /\.js$|jsx/, use: ['babel-loader'] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: IMAGE_SIZE_LIMIT,
          },
        },
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },

      // Styles: Inject CSS into the head with source maps
      //  { 
      //     test: /\.css?$/,
      //     use: [
      //       { loader: "style-loader" },
      //       { loader: "css-loader" ,  options: { sourceMap: true, importLoaders: 1, modules: false },},
      //     ]
      //   },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  }
}