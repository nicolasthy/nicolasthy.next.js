const debug = process.env.NODE_ENV !== "production"

module.exports = {
  assetPrefix: !debug ? "/nicolasthy.next.js/" : "",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
}
