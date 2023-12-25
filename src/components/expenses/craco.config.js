const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add your custom configurations here
      webpackConfig.resolve.fallback = {
        assert: require.resolve('assert/'),
      };
      return webpackConfig;
    },
  },
};
