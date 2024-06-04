import { Product } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a New Product
const createdProducTtoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
}

// Retrieve a List of All Products
const getAllProductAndSearchTermFromDb = async (searchTerm?: string) => {
  const searchRegExp = searchTerm ? new RegExp(searchTerm, 'i') : '';

  const filter = {
    $or: [
      { name: { $regex: searchRegExp } },
      { description: { $regex: searchRegExp } },
      { category: { $regex: searchRegExp } },
    ]
  }

  const products = await ProductModel.find(filter);
  return products;
};

// Retrieve a Specific Product by ID
const getProductByIdFromDb = async (productId: string) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: productId });
  return result;
}

// Update Product Information
const updateProductByIdFromDb = async (productId: string, updateProduct: any) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: productId }, updateProduct, {new: true});
  return result;
}

// Delete a Product
const deletedProductByIdFromDb = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
}

export const ProductService = {
  createdProducTtoDb,
  getAllProductAndSearchTermFromDb,
  getProductByIdFromDb,
  updateProductByIdFromDb,
  deletedProductByIdFromDb
}