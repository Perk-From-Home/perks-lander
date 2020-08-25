module.exports = {
  siteMetadata: {
    title: `Perk from Home`,
    description: `Linking WFH employees with great subscriptions`,
    author: `Archy de Berker, Patrick Steeves, Claudel Rheault`,
    siteUrl: `https://www.perkfromhome.ca`
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-176049307-1'
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`
  ]
};
