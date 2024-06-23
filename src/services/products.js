import { ProductsCollection } from '../db/models/products.js';

const getAll = async () => {
  return await ProductsCollection.find();
};

const getById = async (productId) => {
  return await ProductsCollection.findById(productId);
};

export const ProductService = { getAll, getById };
