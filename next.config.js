const withPlugins = require("next-compose-plugins")
const withOffline = require("next-offline")
const optimizedImages = require("next-optimized-images")
const withGraphql = require("next-plugin-graphql")
const withCSS = require("@zeit/next-css")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
// const withPreact = require("@zeit/next-preact")
const stage = process.env.UP_STAGE

console.log("process.env.API_HOST", process.env.API_HOST)

const nextConfig = {
  assetPrefix: stage ? `/${stage}` : "",
  env: {
    API_HOST:
      process.env.NODE_ENV === "production"
        ? process.env.API_HOST
        : "http://localhost:4000"
  }
  // serverRuntimeConfig: {
  // 	// Will only be available on the server side
  // 	mySecret: 'secret'
  // },
  // publicRuntimeConfig: {
  // 	// Will be available on both server and client
  // 	staticFolder: '/static',
  // 	mySecret: process.env.MY_SECRET // Pass through env variables
  // }
}

module.exports = withPlugins(
  [
    // [withPreact],
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      }
    ],
    [withOffline],
    [withGraphql],
    [withCSS],
    [
      withBundleAnalyzer,
      {
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
          process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: "static",
            reportFilename: "../../bundles/server.html"
          },
          browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html"
          }
        }
      }
    ]
  ],
  nextConfig
)
