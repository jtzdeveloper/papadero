import { woocommerce } from "./woocommerce";

const fromApiResponseToCategories = apiResponse => {
    const  data = [] = apiResponse.data 
    const ids = [143,144,145,149,150]
    
    if(Array.isArray(data)){
        const categories = data.map(category => {
           /* console.log(category) */
            const  {id,name,slug,parent,description,menu_order,count,image } = category 
            return { id, name,slug,parent,description,count,menu_order,image } 
        })
       return categories.filter(opc => ids.includes(opc.id))
    }
    return []
}

export default async function getCategories(){
    return await woocommerce.get('products/categories',{per_page:50})
   .then(res => res)
   .then(fromApiResponseToCategories) 
}