import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const isValidId = (req, res, next) => {
const {productId} = req.params;

if (!isValidObjectId(productId)) {
    throw createHttpError(400, `${productId} is not valid Id`);
}
next();
};


