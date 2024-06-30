import { Router } from 'express';
import { productsController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const productsRouter = new Router();

productsRouter.get('/products', ctrlWrapper(productsController.getAll));

productsRouter.get('/products/:productId', ctrlWrapper(productsController.getById));

productsRouter.post('/products', ctrlWrapper(productsController.add));


export default productsRouter;
