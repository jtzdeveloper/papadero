import { woocommerce } from "./woocommerce";


const fromApiResponseToProductsVariations = apiResponse => {
    const  data = [] = apiResponse.data
  
    if(Array.isArray(data)){
        const variations = data.map(variation => {
            const {id,price,stock_quantity } = variation
            const {option} = variation.attributes[0]
            return { id,price,stock_quantity,option }
        })
        return variations
    }
    return []
}

export default async function getProductsVariations({ idProduct }){
    return await woocommerce.get(`products/${idProduct}/variations`)
   .then(res => res)
   .then(fromApiResponseToProductsVariations) 
}