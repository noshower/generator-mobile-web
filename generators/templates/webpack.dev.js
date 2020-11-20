const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const { networkInterfaces } = require('os');

const getLocalIpAddress = () => {
  const nets = networkInterfaces();
  const results = Object.create(null);

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }
  return results['en0'][0];
};

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
      pathinfo: true,
      filename: '[name].[fullhash].js',
      publicPath: '/',
    },
    devServer: {
      compress: true,
      hot: true,
      host: getLocalIpAddress(),
      disableHostCheck: false,
      port: 8090,
      open: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
};
