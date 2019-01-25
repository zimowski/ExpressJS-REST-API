export default (err, req, res, next) => {
  const isDevelopmentModeOn = req.app.get('env') === 'development'
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = isDevelopmentModeOn
    ? err
    : {};

  // render the error page
  res.Output(
    500,
    null,
    isDevelopmentModeOn
      ? err
      : `Internal server error`
  );
};
