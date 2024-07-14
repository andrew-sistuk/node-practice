import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidBody } from '../middlewares/isValidBody.js';
import { usersController } from '../controllers/auth.js';
import {
  registerUserSchema,
  loginUserSchema,
} from '../validation/validationUsersSchemas.js';

const usersRouter = new Router();

usersRouter.post(
  '/users/register',
  isValidBody(registerUserSchema),
  ctrlWrapper(usersController.register),
);

usersRouter.post(
  '/users/login',
  isValidBody(loginUserSchema),
  ctrlWrapper(usersController.login),
);

export default usersRouter;
