import Express from 'express';

const Router = Express.Router();

Router.get('/', (req, res, next) => {
  res.Output(200, {
    message: 'Authenticated!',
    user: res.user
  });
});

export default Router;
