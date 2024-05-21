import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createdOrderToDb = async (order: Order) => {
    const result = await OrderModel.create(order);
    return result;
}

const getAllOrderFromDb = async (order: Order) => {
    const result = await OrderModel.find();
    return result;
}


// Retrieve Orders by User Email
const searchOrdersByEmailFromDb = async (email: string) => {
    const result = await OrderModel.find({ email });
    return result;
};


export const OrderService = {
    createdOrderToDb,
    getAllOrderFromDb,
    searchOrdersByEmailFromDb
}