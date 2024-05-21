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
            message: err.message || 'Product created failed',
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
            message: err.message || 'Products fetched failed',
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
            message: err.message || 'Products fetched failed',
            error: err
        });
    }
}

const updateProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        const updatedProduct = await ProductService.updateProductByIdFromDb(productId, updatedData);
        console.log(updatedProduct);
        // send respone
        if (updatedProduct) {
            res.status(200).json({
              success: true,
              message: "Product updated successfully!",
              data: updatedProduct,
            });
          } else {
            res.status(404).json({ message: 'Product updated failed' });
          }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Products fetched failed',
            error: err
        });
    }
}

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const deleteProduct = await ProductService.deletedProductByIdFromDb(productId);
        console.log(deleteProduct);
        // send respone
        if (deleteProduct) {
            res.status(200).json({
              success: true,
              message: "Product deleted successfully!",
              data: deleteProduct,
            });
          } else {
            res.status(404).json({ message: 'Product deleted failed' });
          }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Products fetched failed',
            error: err
        });
    }
}

export const ProductController = {
    createNewProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById
}