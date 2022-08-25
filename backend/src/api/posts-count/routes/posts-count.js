module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/posts-count',
     handler: 'posts-count.postsCount',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
