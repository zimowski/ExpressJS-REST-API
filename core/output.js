export default (req, res, next) => {
  res.Output = (status, result, error = null) => {
    return res.status(status).json({
      status: status,
      results: result,
      errorMessage: error
    });
  };
  next();
}
