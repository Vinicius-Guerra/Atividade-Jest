import express, { json } from "express";
import { productRouter } from "./routes/product.routes";

export const app = express();

app.use(json());

app.use("/products", productRouter);
