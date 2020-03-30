require("dotenv").config()

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-graphql`,
            options: {
              typeName: `PotterAPI`,
              fieldName: `potterAPI`,
              url: `http://localhost:8888/.netlify/functions/graphql`
            }
          },
    ]
}