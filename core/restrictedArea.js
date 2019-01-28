import Token from './token';

export default (req, res, next) => {
  if (Token.verify(req.get('token'))) {
    next();
  } else {
    return res.Output(401, null, 'Unauthorized');
  }
};
