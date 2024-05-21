import express from 'express';
import { OrderController } from './order.controller';


const router = express.Router();

router.post('/create-order', OrderController.createOrder)
router.get('/',OrderController.getAllOrder)
router.get('/',OrderController.searchOrdersByEmail)

export const OrderRoute = router;