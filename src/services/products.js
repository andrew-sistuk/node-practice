import { ProductsCollection } from '../db/models/products.js';

const getAll = async () => {
  return await ProductsCollection.find();
};
export const ProductService = { getAll };
