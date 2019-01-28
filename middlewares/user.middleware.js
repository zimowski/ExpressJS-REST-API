import Token from '../core/token';

export default (req, res, next) => {
  res.user = Token.decode(req.get('token')).data;
  next();
};
