module.exports = {
  siteMetadata: {
    title: `Perk from Home`,
    description: `Linking WFH employees with great subscriptions`,
    author: `Archy de Berker, Patrick Steeves, Claudel Rheault`
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
