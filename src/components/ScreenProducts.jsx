import { useState,useEffect } from "react"
import useProductVariations from "../hook/useProductVariations"
import Screen from "./globals/Screen"
import ListProducts from "./ListProducts"
import { useQuery } from "@tanstack/react-query"
import getProducts from "../services/getProducts"
import ScreenLoading from "./globals/ScreenLoading"

export default function ScreenProducts({ idCategorySel,products,order,setOrder,productsFilter,setProductsFilter }){
     
     useEffect(()=>{
          if(idCategorySel >  0){
          const filterProducts = () => {
              const searchProducts = products.
                                      filter(product => 
                                          product.categories[0].id === idCategorySel).sort((a,b)=> a.menu_order - b.menu_order )
                                          setProductsFilter(searchProducts)
              }
  
          filterProducts()
          console.log('change category id')
          }
      },[idCategorySel])
     
      const { isLoading,data,isError,error  } = useQuery({
        queryKey:['products'],
        queryFn: ()=>getProducts()
    })  
       
    return (
        <Screen  showTitleBar={false} height="" title={"Seleccion de prodcutos"}  typeScroll="vertical">
             { isLoading ?  <ScreenLoading text="Obteniendo Productos" /> : 
             <ListProducts  products={data} productsFilter={productsFilter} setProductsFilter={setProductsFilter} order={order} setOrder={setOrder}></ListProducts>
    }
             </Screen>
    )
}