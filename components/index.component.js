import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.Output(200, 'API works!');
});

export default router;
