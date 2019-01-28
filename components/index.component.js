import Express from 'express';

const router = Express.Router();

router.get('/', (req, res, next) => {
  res.Output(200, 'API works!');
});

export default router;
