import createHttpError from 'http-errors';
import { ProductService } from '../services/products.js';

const getAll = async (_, res) => {
  const products = await ProductService.getAll();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

const getById = async (req, res) => {
  const { productId } = req.params;
  const product = await ProductService.getById(productId);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

const add = async (req, res) => {
  const product = await ProductService.add(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

const updateById = async (req, res) => {
  const { productId } = req.params;
  const product = await ProductService.updateById(productId, req.body);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
status: 200,
message: 'Successfully updated a product',
data: product,
  });
};



export const productsController = { getAll, getById, add, updateById };
