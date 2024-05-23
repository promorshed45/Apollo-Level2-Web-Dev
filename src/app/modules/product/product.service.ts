import { Product } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a New Product
const createdProducTtoDb = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
}

// Retrieve a List of All Products
const getAllProductFromDb = async ()=>{
    const result = await ProductModel.find();
    return result;
}

// Retrieve a Specific Product by ID
const getProductByIdFromDb = async (productId: string)=>{
    const result = await ProductModel.findByIdAndUpdate({_id: productId});
    return result;
}

// Update Product Information
const updateProductByIdFromDb = async (productId: string, updateProduct: any)=>{
    const result = await ProductModel.findOneAndUpdate({_id: productId}, updateProduct);
    return result;
}

// Delete a Product
const deletedProductByIdFromDb = async (productId: string)=>{
    const result = await ProductModel.deleteOne({_id: productId});
    return result;
}

// Search a product
const searchProductByPhoneNameFromDb = async () => {
    // const result = await ProductModel.find({ name: { $regex: name, $options: 'i' } });
    const result = await ProductModel.find();

    return result;
};





export const ProductService = {
    createdProducTtoDb,
    getAllProductFromDb,
    getProductByIdFromDb,
    updateProductByIdFromDb,
    deletedProductByIdFromDb,
    searchProductByPhoneNameFromDb
}