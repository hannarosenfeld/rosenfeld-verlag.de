module.exports = {
    siteMetadata: {
        title: `rosenfeld-verlag.de`,
        siteUrl: `https://www.rosenfeld-verlag.de`
    },
    plugins: [
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // Footnotes mode (default: true)
                footnotes: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": "hv25o8vhN4dZ41JTYpbqI1xhVJM3RYsgP2i4TJjBa-g",
                "spaceId": "ns5m7ficn7hl"
            }
        },
        {
            resolve: 'gatsby-source-datocms',
            options: {
                "apiToken": "5d74ea62819c57d312ea346ce45955"
            }
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                "trackingId": "G-MRJP8QS9GZ"
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }]
}
