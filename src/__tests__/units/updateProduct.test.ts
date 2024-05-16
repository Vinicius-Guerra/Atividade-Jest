import { ProductServices } from "../../services/product.services";
import { prismaMock } from "../mocks/prisma";
import { productMock, productUpdateBodyMock } from "../mocks/products.mock";

describe("Unit test: update product", () => {
    test("update product should work correctly", async () => {
        const productServices = new ProductServices();  
        const newProductExpect = { ...productMock, ...productUpdateBodyMock };

        prismaMock.product.update.mockResolvedValue(newProductExpect);

        const data = await productServices.update(productUpdateBodyMock, productMock.id);


        expect(data.id).toStrictEqual(newProductExpect);
    })
})