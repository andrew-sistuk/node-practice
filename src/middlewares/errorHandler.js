export const errorHandler = (_error, _req, res, _next) => {
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
  });
};
