import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidBody } from '../middlewares/isValidBody.js';
import { usersController } from '../controllers/auth.js';
import { registerUserSchema } from '../validation/validationUsersSchemas.js';

const usersRouter = new Router();

usersRouter.post(
  '/users/register',
  isValidBody(registerUserSchema),
  ctrlWrapper(usersController.register),
);

export default usersRouter;
