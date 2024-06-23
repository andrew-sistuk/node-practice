import { Router } from 'express';
import { productsController } from '../controllers/products.js';

const productsRouter = new Router();

productsRouter.get('/products', productsController.getAll);

productsRouter.get('/products/:productId', productsController.getById);

export default productsRouter;
