import { useEffect, useState } from "react"
import getProductsVariations from "../../services/getProductsVariations"
import ButtonAddProduct from "../ButtonAddProduct"
import Button from "./Button"
import Loading from "./Loading"
import ListProductVariations from "../ListProductVariations"
export default function  CardProduct({id,loading, title, product, price, srcImage = null,type,order,setOrder,variations,activeShow }){
 
    
    const searchProducts = ({id}) => {
       return order.line_items.filter(p=> p.id === id)
    }

    const addProduct = ({id}) => {
        let copyOrder = {...order}
        const newProduct = type === 'simple' ? {...product,quantity:1,type:'simple' } : {...product,quantity:1,id:id,id_product:product.id }
       
            if(order.line_items.length > 0){
                let objectSearchProducts = searchProducts({id})
                
                if(objectSearchProducts.length > 0){
                    const indexPos = copyOrder.line_items.findIndex(product => product.id === id)
                    objectSearchProducts[0].quantity = objectSearchProducts[0].quantity + 1  
                    copyOrder.line_items[indexPos] = objectSearchProducts[0]
                    setOrder(copyOrder)
                } else {
                    let lineItems = [...copyOrder.line_items,newProduct]
                    copyOrder.line_items = lineItems
                    console.log(copyOrder)
                    setOrder(copyOrder)
                }
            } 
            else 
            {
                let lineItems = [...copyOrder.line_items,newProduct]
                copyOrder.line_items = lineItems
                console.log(copyOrder)
                setOrder(copyOrder)
            }
    }

    const add = ({product,variation = []}) => {
        if(type === 'simple'){
           
            addProductSimple(product)
            return 
        }
    }

    const addProductSimple = (product) => {
        const { line_items } = order
        
        if(line_items.find(current => current.id === product.id)){
            const newLineItems = line_items.map( x => x.id === product.id 
                ? ({
                    ...x,
                    selectedQuantity: x.selectedQuantity + 1
                }) 
                : x)
                return setOrder({line_items: newLineItems})
        }
       
        return setOrder({
            line_items: line_items.concat({
                ...product,
                selectedQuantity:1
            })
        })      
    }

    const addProductVariable = (product,variation) => {
        console.log(variation)
        const { line_items } = order
        if(line_items.find(current => current.id === variation.id)){
            const newLineItems = line_items.map( x => x.id === variation.id 
                ? ({
                    ...x,
                    selectedQuantity: x.selectedQuantity + 1
                }) 
                : x)
                return setOrder({ line_items: newLineItems })
        }

        return setOrder({
            line_items: line_items.concat({
                ...product,
                id: variation.id,
                product_id: product.id,
                price: variation.price,
                selectedQuantity:1,
                option: variation.option
            })
        })      
    }

    const even = (element) => element.id === id
    const isSelected = order.line_items.some(even)
    const total = isSelected ? order.line_items.find(product=>product.id === id).selectedQuantity : 0
    
    console.log(isSelected)
    return (
        
<div className="w-full animate-fade h-56 flex-none max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a className="flex justify-between rounded-3xl">
         <img className="w-32 h-32 p-8 rounded-3xl" src={srcImage} alt="product image" /> 
        
      <ListProductVariations loading={loading} product={product} variations={variations} addProduct={addProductVariable} />
  <section className={`flex mt-3 mr-3 justify-center items-center bg-slate-500 text-white font-bold animate-fade  w-8 h-8 rounded-full ${ !isSelected ? 'hidden' : '' }`}>{total}</section> 
        
        {/*  <section className="flex justify-center items-center bg-slate-600 rounded-sm w-24 h-8">GRANDE</section>
         <section className="flex justify-center items-center bg-slate-600 rounded-sm w-24 h-8">FAMILIAR</section> */}
         
         
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
       
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            { type === 'simple' ? 
            <Button  eventClick={ () => addProductSimple(product) }>Add</Button>
            :<Button eventClick={ activeShow }>opciones</Button>}
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    </div>
</div>

    )
}