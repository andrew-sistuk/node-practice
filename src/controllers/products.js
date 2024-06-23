import createHttpError from 'http-errors';
import { ProductService } from '../services/products.js';

const getAll = async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.json({
      status: 200,
      message: 'Successfully found products!',
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await ProductService.getById(productId);
    if (!product) {
      throw createHttpError(404, 'Product not found');
      // next(createHttpError(404, 'Product not found'));
      // return;
    }
    res.json({
      status: 200,
      message: `Successfully found product with id ${productId}!`,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const productsController = { getAll, getById };
