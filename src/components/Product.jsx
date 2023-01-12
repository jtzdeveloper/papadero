import { useEffect,useState } from "react"
import useProductVariations from "../hook/useProductVariations"
import getProductsVariations from "../services/getProductsVariations"
import CardProduct from "./global/CardProduct"

export default function Product({ product,order,setOrder,productsFilter,setProductsFilter }){
    
    const {id, name,price,images,type } = product
    
    const srcImg = images.length > 0 ? images[0].src : null
    const TYPE_PRODUCT = 'variable'
    
    const [show,setShow] = useState(0)
    const [loading,setLoading] = useState(false)
    const [variations,setVariations] = useState([])
    
    
    
    const activeShow = () => {
     type === 'variable' ? setShow(show + 1) : ''
    }
    
    const createNewProducts = (dataProductsVariation) => {
        return dataProductsVariation.map( prod => ({...product,
                                                    id : prod.id,
                                                    id_product:id ,
                                                    option:prod.option,
                                                    price: prod.price,
                                                    name: `${title} ${ prod.option.toUpperCase()} `}))
    }

     useEffect(()=>{
        if(type === TYPE_PRODUCT && show > 0){
          setLoading(true)
            const getDataProductVariations = async () => {
            await getProductsVariations({idProduct:id})
                      .then(data => {
                        setVariations(data)
                        setLoading(false)
                      })
          }

          getDataProductVariations()
        }
    },[show]) 
   

    return (
        <CardProduct  
            id={id}
            loading={loading} 
            product={product} 
            price={price} 
            title={ name } 
            srcImage={srcImg} 
            type={type} 
            order={order} 
            setOrder={setOrder}
            variations={variations}
            activeShow={ activeShow }>
        </CardProduct>
    )
}