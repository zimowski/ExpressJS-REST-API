export default (app, routes) => {
  routes.forEach(item => {
    if (item.component) {
      app.use(item.path, item.middlewares, item.component);
    } else {
      throw `Component for route ${item.route} doesn't exist`;
    }
  });
};
