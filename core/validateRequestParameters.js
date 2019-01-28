export default (req, res, next) => {
  const errors = req.validationErrors();

  if (errors) {
    return res.Output(400, errors, 'Invalid parameters');
  }
  next();
};
