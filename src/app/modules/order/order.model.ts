import mongoose, { Schema } from 'mongoose';
import { Order } from './order.interface';

// Create schema
const orderSchema = new Schema<Order>({
        email: { type: String, unique: true, required: [true, 'Email is required'] },
        productId: { type: String, required: [true, 'Product ID is required'] },
        price: { type: Number, required: [true, 'Price is required'] },
        quantity: { type: Number, required: [true, 'Quantity is required'] },
    });



// Create model
export const OrderModel = mongoose.model<Order>('Order', orderSchema);