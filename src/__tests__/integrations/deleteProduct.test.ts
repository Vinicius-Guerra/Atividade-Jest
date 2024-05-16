import { prisma } from "../../database/prisma";
import { productCreateBodyMock, productMock } from "../mocks/products.mock";
import { request } from "../utils/request";

describe("Integration test: delete product", () => {
    test("should be able to delete a product successfully", async () => {
        const product = await prisma.product.create({ data: productCreateBodyMock });

        await request.delete(`/products/${product.id}`).expect(204);
    });

    test("should throw error when product is invalid", async () => {
        const data = await request
           .delete(`/products/a3f3ca8a-5cc5-437e-9588-1eab725cd0a8`)
           .expect(404)
           .then((response) => response.body);
  
         expect(data.message).toBe("Product not found.");  
     });
})