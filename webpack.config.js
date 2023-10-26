/* eslint-disable @typescript-eslint/no-var-requires */ 
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const slsw = require('serverless-webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { isLocal } = slsw.lib.webpack
const nodeExternals = require('webpack-node-externals')
require('source-map-support').install()

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: isLocal ? 'development' : 'production',
  devtool: isLocal ? 'source-map' : 'eval',
  externals: [nodeExternals()],
  optimization: {
    nodeEnv: false,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'prisma/schema.prisma',
          to: 'prisma/schema.prisma',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
}
