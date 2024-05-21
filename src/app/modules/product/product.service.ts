import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createdProducTtoDb = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductFromDb = async (product: Product)=>{
    const result = await ProductModel.find();
    return result;
}

const getProductByIdFromDb = async (productId: string)=>{
    const result = await ProductModel.findByIdAndUpdate({_id: productId});
    return result;
}

const updateProductByIdFromDb = async (productId: string, updateProduct: any)=>{
    const result = await ProductModel.findOneAndUpdate({_id: productId}, updateProduct);
    return result;
}

const deletedProductByIdFromDb = async (productId: string)=>{
    const result = await ProductModel.deleteOne({_id: productId});
    return result;
}
export const ProductService = {
    createdProducTtoDb,
    getAllProductFromDb,
    getProductByIdFromDb,
    updateProductByIdFromDb,
    deletedProductByIdFromDb
}