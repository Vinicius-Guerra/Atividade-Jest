import { productCreateBodyMock, productMock } from "../mocks/products.mock"
import { productDefaultExpect } from "../utils/productDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: create product", () => {
   test("should be able to create a product successfully", async () => {
      const data = await request
         .post("/products")
         .send(productCreateBodyMock)
         .expect(201)
         .then((response) => response.body);

      expect(data.id).toBeDefined();
      productDefaultExpect(data, productCreateBodyMock)
   });
});