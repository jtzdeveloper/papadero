
import { woocommerce } from "./woocommerce";

const fromApiResponseToNewOrder = apiResponse => {
    console.log(apiResponse)
}

export default async function createOrder( data ){
    console.log(data)
     return await woocommerce.post('orders',data)
   .then(res => res)
   /* .then(fromApiResponseToNewOrder)   */
}