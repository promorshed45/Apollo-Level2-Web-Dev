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
    const result = await ProductModel.findOne({_id: productId});
    return result;
}
export const ProductService = {
    createdProducTtoDb,
    getAllProductFromDb,
    getProductByIdFromDb
}