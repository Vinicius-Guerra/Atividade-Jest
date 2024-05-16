import { IProduct, TCreateProductBody } from "../../interfaces/product.interfaces";

export const productDefaultExpect = (data: IProduct, expectData: TCreateProductBody) => {
    expect(data.name).toBe(expectData.name);
    expect(data.description).toBe(expectData.description);
    expect(data.price).toBe(expectData.price);
}