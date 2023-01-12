import { woocommerce } from "./woocommerce";

const fromApiResponseToOrders = apiResponse => {
     const  data = [] = apiResponse.data 
     
     if(Array.isArray(data)){
         const orders = data.map(order => {
            const { id,number,status,total,billing,shipping,line_items,date_created } = order
            const totalItems = line_items.reduce(( accumulator, currentValue ) => accumulator + currentValue.quantity,0)
            return { id,number,status,total,billing,shipping,totalItems,line_items,date_created  }
         }) 
        
         return orders
     }
     return []
}

export const getOrders = async  () => {
    let fdata 
     await woocommerce.get('orders',{ per_page:100, status: 'pending' }).then(resp=> fdata = resp.data)
    
   
    return fdata
   /*  .then(res => res)
    .then(fromApiResponseToOrders)  */
}