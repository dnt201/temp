const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@api": path.resolve(__dirname, 'src/api/'),
      "@app": path.resolve(__dirname, 'src/app/'),
      "@pages": path.resolve(__dirname, 'src/pages/'),
      "@redux": path.resolve(__dirname, 'src/redux/'),
      "@router": path.resolve(__dirname, 'src/router/')

    }
  }
};