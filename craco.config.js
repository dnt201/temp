const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@helper": path.resolve(__dirname, "src/helper/"),
      "@api": path.resolve(__dirname, "src/helper/api"),
      "@app": path.resolve(__dirname, "src/app/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@helper": path.resolve(__dirname, "src/helper/"),
      "@models": path.resolve(__dirname, "src/models/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@router": path.resolve(__dirname, "src/router/"),
    },
  },
};
