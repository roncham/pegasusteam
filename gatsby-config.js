const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    //title: config.siteTitle,
    siteUrl: 'https://www.pegasusteam.com',
    title: 'PegasusTeam', // <title>
    titleTemplate: '%s · PegasusTeam',
    description:
      'We build websites using the latest technologies like GatsbyJS for building static JAMstack websites and WordPress websites.',
    url: 'https://pegasusteam.com', // No trailing slash allowed!
    image: '/images/screenshots.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@pegasusteam',
    webappcap: 'yes',
    webappstatus: 'default',
    mobileopt: 'width',
    handheldfriendly: 'true',
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
        orientation: config.manifestOrientation,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
        categories: config.manifestCategories,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-4041486-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'pegasusteam.com',
        cookieExpires: 0,
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
        siteUrl: `https://pegasusteam.com`,
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
        ],
      },
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
