import { useEffect } from "react";
import Product from "./Product";

export default function ListProducts({ products,productsFilter,setProductsFilter,order,setOrder }){
    return (
        productsFilter.map(product=>(
            <Product key={product.id} 
                    product={ product } 
                    order={order} 
                    setOrder={setOrder} 
                    productsFilter={productsFilter} 
                    setProductsFilter={setProductsFilter} />
        ))
    )
}