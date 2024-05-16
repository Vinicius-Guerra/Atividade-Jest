import { ProductServices } from "../../services/product.services";
import { prismaMock } from "../mocks/prisma";
import { productCreateBodyListMock, productListMock } from "../mocks/products.mock";
import { productDefaultExpect } from "../utils/productDefaultExpect";

describe("Unit test: get many products", () => {
    test("get many products should work correctly", async () => {
        
        prismaMock.product.findMany.mockResolvedValue(productListMock);
        const productServices = new ProductServices();

        const data = await productServices.getMany();

        expect(data).toHaveLength(productListMock.length);
        productDefaultExpect(data[0], productListMock[0]);
        productDefaultExpect(data[1], productListMock[1]);
    });
});