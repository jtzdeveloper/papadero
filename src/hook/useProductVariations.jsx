import { useEffect, useState } from "react"
import getProductsVariations from "../services/getProductsVariations"

export default function useProductVariations({ idProduct }){
    const [loading,setLoading] = useState(false)
    const [variations,setVariations] = useState([])
    
    const createNewProducts = (dataProductsVariation) => {
        console.log(dataProductsVariation)
        const newsProducts =  dataProductsVariation.map( prod => ({...product,id : prod.id,type :'simple',id_product:id ,option:prod.option,price: prod.price,name: `${title} ${ prod.option.toUpperCase()  } ` }))
        
    }
    useEffect(()=>{
        if(idProduct > 0){
            setLoading(true)
            getProductsVariations(idProduct)
                .then(response => {
                    const newsProducts = createNewProducts(response)
                    setVariations(newsProducts)
                    setLoading(false)
                })
        }    
    },[idProduct])

    return { loading,variations }
}