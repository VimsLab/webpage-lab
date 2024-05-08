module.exports = {
  plugins: [
   'gatsby-plugin-postcss',
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
