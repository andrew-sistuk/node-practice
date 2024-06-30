import { ProductsCollection } from '../db/models/products.js';

const getAll = async () => {
  return await ProductsCollection.find();
};

const getById = async (productId) => {
  return await ProductsCollection.findById(productId);
};

const add = async (paylod) => {
  return await ProductsCollection.create(paylod);
};

export const ProductService = { getAll, getById, add };
