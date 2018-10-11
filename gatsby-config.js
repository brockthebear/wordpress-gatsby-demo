module.exports = {
  siteMetadata: {
    title: 'YellowFolder v2.0 Demo',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'localhost:8080', // obv needs to change for production.
        protocol: 'http',
        hostingWPCOM: false, // whether or not this is hosted on wordpress.com.
        useACF: true, // true if using custom fields.
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
