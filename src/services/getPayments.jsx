import { woocommerce } from "./woocommerce";

const fromApiResponseToPayment = apiResponse => {
    const  data = [] = apiResponse.data 
     console.log(data)
     if(Array.isArray(data)){
         const payments = data.map(payment => {
            const { id,title,description } = payment
            
            return {  id,title,description }
         }) 
        
         return payments
     }
     return []
}

export default async function getPayments(){
    
    return await woocommerce.get('payment_gateways')
    .then(res => res)
    .then(fromApiResponseToPayment) 
}