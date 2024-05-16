import { prisma } from "../../database/prisma";
import { productCreateBodyMock, productMock, productUpdateBodyMock } from "../mocks/products.mock"
import { request } from "../utils/request";

describe("Integration test: update product", () => {
   test("should update product sucessfully", async () => {
      const product = await prisma.product.create({ data: productCreateBodyMock });
       
      const data = await request
         .patch(`/products/${product.id}`)
         .send(productUpdateBodyMock)
         .expect(200)
         .then((response) => response.body);

         const newProduct = { ...product, ...productUpdateBodyMock };

      expect(data).toStrictEqual(newProduct);
   });

   test("should throw error when product is invalid", async () => {

      const data = await request
         .patch(`/products/a3f3ca8a-5cc5-437e-9588-1eab725cd0a8`)
         .expect(404)
         .then(response => response.body)

      expect(data.message).toBe("Product not found.")

      // const data = await request
      //    .patch(`/products/a3f3ca8a-5cc5-437e-9588-1eab725cd0a8`)
      //    .send(productUpdateBodyMock)
      //    .expect(404)
      //    .then((response) => response.body);

      // expect(data.message).toBe("Product not found.");

   });
});