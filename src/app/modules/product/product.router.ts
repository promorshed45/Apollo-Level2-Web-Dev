import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();


router.post('/create-product', ProductController.createNewProduct)
router.get('/', ProductController.getAllProduct)
router.get('/:productId', ProductController.getProductById)

export const ProductRoute = router;