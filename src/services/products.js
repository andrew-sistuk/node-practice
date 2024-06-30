import { ProductsCollection } from '../db/models/products.js';
import { SORT_ORDER } from '../constans/index.js';
import { parseSortOrder } from '../utils/parseSortOrder.js';

const getAll = async (req) => {
  const {
    sortBy = 'name',
    sortOrder = SORT_ORDER.ASC,
    minPrice,
    maxPrice,
  } = req.query;

  return await ProductsCollection.find()
    .where('price')
    .gte(minPrice)
    .lte(maxPrice)
    .sort({
      [sortBy]: parseSortOrder(sortOrder),
    });
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
      new: true,
    },
  );
};

export const ProductService = { getAll, getById, add, updateById };
