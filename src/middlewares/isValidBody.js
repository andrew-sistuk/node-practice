import createHttpError from 'http-errors';

export const isValidBody = (schema) => {
  const fn = (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw createHttpError(400, error.message);
    }
    next();
  };
  return fn;
};
