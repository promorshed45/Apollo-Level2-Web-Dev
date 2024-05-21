import exp from "constants";
import { Request, Response } from "express";
import { OrderService } from "./order.service";


const createOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const result = await OrderService.createdOrderToDb(order)

        // send respone
    res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Order created failed',
            error: err
        });
    }
}

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const result = await OrderService.createdOrderToDb(order)

        // send respone
    res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Orders fetched failed',
            error: err
        });
    }
}



const searchOrdersByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;
        console.log(email);
        // if (!email) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'Email query parameter is required',
        //     });
        // }

        const result = await OrderService.searchOrdersByEmailFromDb(email);
            console.log(result);
        res.status(200).json({
            success: true,
            message: `Orders for email '${email}' fetched successfully!`,
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: `Failed to fetch orders for email '${req.query.email}'`,
            error: err.message,
        });
    }
};

export const OrderController = {
    createOrder,
    getAllOrder,
    searchOrdersByEmail
}