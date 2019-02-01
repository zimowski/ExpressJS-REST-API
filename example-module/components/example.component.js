import Express from 'express';

const Router = Express.Router();

Router.get('/test', (req, res, next) => {
  res.Output(200, 'Test component works!');
});

export default Router;
