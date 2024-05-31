import { ProductModel } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createdOrderToDb = async (order: Order) => {
    try {


        // Check product is exists
        const product = await ProductModel.findById(order.productId);

        if (!product) {
            return { success: false, message: "Product not found" };
        }

        // Calculate updated inventory
        const updatedInventory = product.inventory.quantity - order.quantity;

        // Check inventory is sufficient
        if (updatedInventory < 0) {
            return { success: false, message: "Insufficient inventory" };
        }

        // Update product inventory and stock status
        const inCurrentStock = updatedInventory > 0;
        await ProductModel.updateOne(
            { _id: product.id },
            { $set: { 'inventory.quantity': updatedInventory, 'inventory.inStock': inCurrentStock } },
            { new: true }
        );

        // Create new order
        const result = await OrderModel.create(order);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error creating order:", error);
        return { success: false, message: "Order created Failed!" };
    }
};



// Retrieve Orders by User Email
const searchOrdersByEmailFromDb = async (email: string) => {
    const searchRegExp = email ? new RegExp(email, 'i') : '';

  const filter = {
    $or: [
      { email: { $regex: searchRegExp } }
    ]
  }
    const result = await OrderModel.find(filter);
    return result;
};


export const OrderService = {
    createdOrderToDb,
    searchOrdersByEmailFromDb
}