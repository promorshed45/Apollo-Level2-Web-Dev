
import { Request, Response } from "express";
import { OrderService } from "./order.service";
import orderSchemaValidation from "./order.validation";


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

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getAllOrderFromDb();

        // send respone
    res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: 'Orders fetched failed',
            error: err
        });
    }
}



const searchOrdersByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;
        const result = await OrderService.searchOrdersByEmailFromDb(email);
        
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
    getAllOrder,
    searchOrdersByEmail
}