module.exports = {
    postsCount: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::article.article",
          {
            fields: ["id"]
          }
        );
  
        // reduce the data to the format we want to return
        let count;
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.length;
        }
  
        // return the reduced data
        return count;
      } catch (err) {
        return err;
      }
    },
  };