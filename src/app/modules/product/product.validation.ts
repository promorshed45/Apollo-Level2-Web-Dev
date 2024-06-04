import { z } from 'zod';

// Variant Schema added Zod validation
const variantSchema = z.object({
    type: z.string().min(1, { message: 'Variant type is required' }),
    value: z.string().min(1, { message: 'Variant value is required' })
});

// Inventory Schema added Zod validation
const inventorySchema = z.object({
    quantity: z.number().min(0, { message: 'Inventory quantity is required' }),
    inStock: z.boolean({ message: 'Inventory stock status is required' }),
});

// Product Schema added Zod validation
const productSchemaValidation = z.object({
    name: z.string().min(1, { message: 'Product name is required' }),
    description: z.string().min(1, { message: 'Product description is required' }),
    price: z.number().min(0, { message: 'Product price is required' }),
    category: z.string().min(1, { message: 'Product category is required' }),
    tags: z.array(z.string().min(1, { message: 'Product tag is required' })),
    variants: z.array(variantSchema),
    inventory: inventorySchema,
});

export default productSchemaValidation;