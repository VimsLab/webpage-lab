module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
   'gatsby-plugin-postcss',
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ],
  pathPrefix: `/public/`, // TODO comment this line when this webpage is ready to be published as the main lab webpage. This is to read the files in the folder when built in a test location in GoDaddy
};
