/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `techapp`,
    siteUrl: `https://www.yourdomain.tld`
  },

  
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://localhost:10076/graphql"
    }
  }, 
  // {
  //   resolve: "gatsby-source-graphql",
  //   options: {
  //     typeName: "GitHub",
  //     fieldName: "github",
  //     url: "https://api.github.com/graphql",
  //     // A `fetch`-compatible API to use when making requests.
  //     fetch: (uri, options = {}) =>
  //       fetch(uri, { ...options, headers: sign(options.headers) }),
  //   },
  // },
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss"]
};