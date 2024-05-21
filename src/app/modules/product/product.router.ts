import express, { Request, Response } from 'express';
import { ProductController } from './product.controller';
const router = express.Router();


router.post('/create-product', ProductController.createNewProduct)
router.get('/', ProductController.getAllProduct)
router.get('/:productId', ProductController.getProductById)
router.put('/:productId', ProductController.updateProductById)
router.delete('/:productId', ProductController.deleteProductById)
router.get('/', ProductController.searchProductByName)



export const ProductRoute = router;