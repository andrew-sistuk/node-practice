export const errorHandler = (error, _req, res, _next) => {
  res.status(error.status || 500).json({
    status: error.status || 500,
    message: error.message || 'Something went wrong',
  });
};
