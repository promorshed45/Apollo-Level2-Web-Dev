import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();


router.post('/', ProductController.createNewProduct)
router.get('/', ProductController.getAllProductAndSearchTerm)
router.get('/:productId', ProductController.getProductById)
router.put('/:productId', ProductController.updateProductById)
router.delete('/:productId', ProductController.deleteProductById)



export const ProductRoute = router;