import { Request, Response } from "express";
import { OrderService } from "./order.service";
import orderSchemaValidation from "./order.validation";

// create order & update inventory
const createOrder = async (req: Request, res: Response) => {
    try {
        // update inventory        
        const order = req.body;
        const orderValidationData = orderSchemaValidation.parse(order);
        const result = await OrderService.createdOrderToDb(orderValidationData)

        // send respone
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: 'Order created failed',
            error: err
        });
    }
}

// get all orders and email search functionality 
const getOrderAndsearchEmail = async (req: Request, res: Response) => {
    try {
        const email = req.query.email || '';
        const result = await OrderService.getOrderAndsearchEmailIntoDb(email as string);

        // send respone
        res.status(200).json({
            success: true,
            message: `Orders for email '${email}' fetched successfully!`,
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: `Failed to fetch orders for email '${req.query.email}'`,
            error: err
        });
    }
};

export const OrderController = {
    createOrder,
    getOrderAndsearchEmail
}