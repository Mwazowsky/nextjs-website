module.exports = {
  async postsCount(ctx, next) {
    try {
      const data = await strapi
        .service("api::posts-count.posts-count")
        .postsCount();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};