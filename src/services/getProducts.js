import { woocommerce } from "./woocommerce";

const fromApiResponseToProducts = apiResponse => {
     const  data = [] = apiResponse.data 
     
         /* console.log(data) */   
     if(Array.isArray(data)){
         const products = data.map(product => {
            const { id,type,name,images,price,sku,stock_status,categories,menu_order,attributes } = product
            
            return { id,type,name,images,price,sku,stock_status,categories,menu_order,selectedQuantity:0,attributes }
         }) 
         /* products.qtyPages = Number(apiResponse.headers['x-wp-totalpages']) */
         /* products.result = apiResponse */
             
        return products
     }
     return []
}

export default async function getProducts(perPage = 10,pag = 1){
    
    return await woocommerce.get('products',{ per_page:100, include: [6706 ,6708,6707,6702,6714,6718,6722,6726,6730,6734,6735,6763,6768,6772  ] })
    .then(res => res)
    .then(fromApiResponseToProducts) 
}