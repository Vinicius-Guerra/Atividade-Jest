import { prisma } from "../database/prisma";
import { IProduct, TCreateProductBody, TUpdateProductBody } from "../interfaces/product.interfaces";

export class ProductServices{
    async create(body: TCreateProductBody): Promise<IProduct>{
        const newProduct = await prisma.product.create({ data: body })

        return newProduct;
    }
    
    async getMany(): Promise<IProduct[]>{
        const productList = await prisma.product.findMany();
        return productList;
    }

    async update(body: TUpdateProductBody, updatingId: string): Promise<IProduct>{
        const updateProduct = await prisma.product.update({ data: body, where: { id: updatingId }});

        return updateProduct;
    }

    async delete(removingId: string): Promise<void>{
        await prisma.product.delete({ where: { id: removingId }});

    }
}