import { Router } from 'express';
import { productsController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { isValidBody } from '../middlewares/isValidBody.js';
import { validationCreateProductSchema } from '../validation/validationCreateProductSchema.js';

const productsRouter = new Router();

productsRouter.get('/products', ctrlWrapper(productsController.getAll));

productsRouter.get(
  '/products/:productId',
  isValidId,
  ctrlWrapper(productsController.getById),
);

productsRouter.post(
  '/products',
  isValidBody(validationCreateProductSchema),
  ctrlWrapper(productsController.add),
);

productsRouter.patch(
  '/products/:productId',
  isValidId,
  ctrlWrapper(productsController.updateById),
);

export default productsRouter;
