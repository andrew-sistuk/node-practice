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

export const productsController = { getAll };
