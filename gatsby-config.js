// require("dotenv").config()

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-layout',
            options: {
              component: require.resolve('./src/layouts/index.js'),
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Comic Neue\:300,400,400i,700',
                'Open Sans\:300,400,400i,700',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                  include: /assets/
                }
            }
          },
        'gatsby-plugin-theme-ui'
    ]
}