import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createNewProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        // console.log(product);
        const result = await ProductService.createdProducTtoDb(product);
        // send respone
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Product created faild',
            error: err
        });
    }
}

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        console.log(product);
        const result = await ProductService.createdProducTtoDb(product);
        // send respone
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Products fetched faild',
            error: err
        });
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductService.getProductByIdFromDb(productId);
        // send respone
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Products fetched faild',
            error: err
        });
    }
}

export const ProductController = {
    createNewProduct,
    getAllProduct,
    getProductById,
}