/** @type {import('next').NextConfig} */
const nextConfig = {};

const webpack = require("webpack");

module.exports = {
  nextConfig,

  webpack: (config) => {
    // Optional: Enables reading mapbox token from environment variable
    config.plugins.push(
      new webpack.EnvironmentPlugin({ MapboxAccessToken: "" })
    );
    return config;
  },
};
