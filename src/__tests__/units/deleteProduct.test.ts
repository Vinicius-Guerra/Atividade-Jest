import { ProductServices } from "../../services/product.services";
import {  productMock } from "../mocks/products.mock";

describe("Unit test: delete product", () => {
    test("delete product should work correctly", async () => {
        
        const productServices = new ProductServices();

        await productServices.delete(productMock.id);
    })
});