module.exports = {
  siteMetadata: {
      title: `rosenfeld-verlag.de`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "5d74ea62819c57d312ea346ce45955"
    }
  }, {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-MRJP8QS9GZ"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};