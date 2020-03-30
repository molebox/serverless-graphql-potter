require("dotenv").config()

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-graphql`,
            options: {
              typeName: `PotterAPI`,
              fieldName: `potterAPI`,
              url: `https://serverless-graphql-potter.netlify.com/.netlify/functions/graphql`
            }
          },
    ]
}