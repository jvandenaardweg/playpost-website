module.exports = {
  siteMetadata: {
    title: 'Playpost',
    description: 'Instant podcasts of every article',
    siteUrl: 'https://playpost.app',
    author: 'Jordy van den Aardweg',
    twitter: 'playpostapp',
  },
  assetPrefix: 'https://playpost.app',
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/playlist/add/*`] },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-258356-39',
        head: false,
        anonymize: true,
        respectDNT: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Playpost',
        short_name: 'Playpost',
        description: 'Instant podcasts of every article',
        homepage_url: 'https://playpost.app/',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#0077FF',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/apple-app-site-association`,
        destination: '/apple-app-site-association',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
    'gatsby-plugin-remove-trailing-slashes',
  ],
}
