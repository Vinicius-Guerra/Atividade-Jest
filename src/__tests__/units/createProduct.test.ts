import { ProductServices } from "../../services/product.services"
import { prismaMock } from "../mocks/prisma";
import { productCreateBodyMock, productMock } from "../mocks/products.mock";
import { productDefaultExpect } from "../utils/productDefaultExpect";

describe("Unit test: create product", () => {  
    test("create product works correctly", async () => {
        const productServices = new ProductServices();

        prismaMock.product.create.mockResolvedValue(productMock);

        const data = await productServices.create(productCreateBodyMock);
        
        expect(data).toBe(productMock);
    });
});