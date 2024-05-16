
import { Request, Response } from "express";
import { IProduct } from "../interfaces/product.interfaces";
import { ProductServices } from "../services/product.services";

export class ProductControllers{
    async create(req: Request, res: Response): Promise<Response<IProduct>>{
        const productServices = new ProductServices();

        const response = await productServices.create(req.body);

        return res.status(201).json(response);
    }

    async getMany(req: Request, res: Response): Promise<Response<IProduct[]>>{
        const productServices = new ProductServices();

        const response =  await productServices.getMany();

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response): Promise<Response<IProduct>>{
        const productServices = new ProductServices();

        const id = req.params.id;

        const response = await productServices.update(req.body, id);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response): Promise<Response<void>>{
        const productServices = new ProductServices();

        const id = req.params.id;

        await productServices.delete(id);

        return res.status(204).json();
    }
}
