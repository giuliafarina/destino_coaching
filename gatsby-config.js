

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.destinocoaching.co.uk",
    title: "Destino-Coaching",
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    "gatsby-transformer-remark",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
  ],
};
