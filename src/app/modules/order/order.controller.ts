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

export const OrderController = {
    createOrder,
    getAllOrder,
}