import { z } from 'zod';

// Order Schema added Zod validation
const orderSchema = z.object({
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    productId: z.string().min(1, { message: 'Product ID is required' }),
    price: z.number().nonnegative({ message: 'Price must be a non-negative number' }).min(0, { message: 'Price is required' }),
    quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }).min(1, { message: 'Quantity is required' }),
});


export default orderSchema;