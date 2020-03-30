
exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
  
    createRedirect({
      fromPath: `/graphql`,
      toPath: `/.netlify/functions/graphql`,
      statusCode: 200
    });
  };