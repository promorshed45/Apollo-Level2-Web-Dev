import express, { Request, Response } from "express";
import cors from 'cors';
import { OrderRoute } from "./app/modules/order/order.route";
import { ProductRoute } from "./app/modules/product/product.router";

const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoute)
app.use('/api/orders', OrderRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

export default app;