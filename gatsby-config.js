require("dotenv").config()

module.exports = {
    developMiddleware: app => {
        app.use(
          `/.netlify/functions/`,
          proxy({
            target: `http://localhost:8000`
          })
        );
      },
    plugins: [
        {
            resolve: `gatsby-source-graphql`,
            options: {
              typeName: `POTTERAPI`,
              fieldName: `PotterAPI`,
              url: `http://localhost:8000/.netlify/functions/graphql`
            }
          },
    ]
}