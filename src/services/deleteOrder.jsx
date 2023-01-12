
import { woocommerce } from "./woocommerce";


export default async function deleteOrder( idOrder ){
    return await woocommerce.delete(`orders/${ idOrder }`,{force:true})
}