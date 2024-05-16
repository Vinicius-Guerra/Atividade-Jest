import { prisma } from "../../database/prisma";
import { productCreateBodyListMock, productListMock } from "../mocks/products.mock";
import { productDefaultExpect } from "../utils/productDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: get many products", () => {
    test("Should be able to get many products sucessfully", async () => {
        await prisma.product.createMany({ data: productCreateBodyListMock });
        
        const data = await request  
            .get("/products")
            .expect(200)
            .then(response => response.body);

        expect(data).toHaveLength(2);

        expect(data[0].id).toBeDefined();
        productDefaultExpect(data[0], productCreateBodyListMock[0]);

        expect(data[1].id).toBeDefined();
        productDefaultExpect(data[1], productCreateBodyListMock[1]);
    });
});