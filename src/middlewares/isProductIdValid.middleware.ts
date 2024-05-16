import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class IsProductIdValid{
    static async execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id;

        const product = await prisma.product.findFirst({ where: { id }});

        if(!product){
            return res.status(404).json({ message: "Product not found."});
        }

        next();
    }
}