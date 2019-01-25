export default (req, res, next) => {
  res.Output(404, null, `${req.originalUrl} not found`);
  next();
};
