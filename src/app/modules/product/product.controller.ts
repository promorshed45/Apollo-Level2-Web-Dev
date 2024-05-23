import { Request, Response } from "express";
import { ProductService } from "./product.service";
import productSchemaValidation from "./product.validation";


// Create a New Product
const createNewProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const productValidationData = productSchemaValidation.parse(product);
        const result = await ProductService.createdProducTtoDb(productValidationData);

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

// Retrieve a List of All Products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;

        if (searchTerm) {
            return res.status(400).json({
                success: false,
                message: 'Invalid search term parameter',
            });
        }
        const result = await ProductService.getAllProductFromDb(searchTerm as string);

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

// Retrieve a Specific Product by ID
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

// Update Product Information
const updateProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        const updatedProduct = await ProductService.updateProductByIdFromDb(productId, updatedData);
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

// Delete a Product
const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const deleteProduct = await ProductService.deletedProductByIdFromDb(productId);
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
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    // searchProductByName
}