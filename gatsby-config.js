const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    // for images
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // seo
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.pegasusteam.com`,
      },
    },
    // markdown and filesystem
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
            'gatsby-remark-prismjs',
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false,
              },
            },
          ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
};
