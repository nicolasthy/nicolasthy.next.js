const debug = process.env.NODE_ENV !== "production"

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/posts": { page: "/posts" },
    }
  },
  assetPrefix: !debug ? "/nicolasthy.next.js/" : "",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
}
