const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: require('../package.json').dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
