import { woocommerce } from "./woocommerce";

export const getProducts = async (idCategorySel) => {
    return await woocommerce.get('products',{ category:idCategorySel })
}