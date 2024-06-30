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

const updateById = async (productId, payload) => {
  return await ProductsCollection.findOneAndUpdate(
    {
      _id: productId,
    },
    payload,
    {
      new: true
    }
  );
};

export const ProductService = { getAll, getById, add, updateById };
