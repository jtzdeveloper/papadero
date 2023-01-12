import { memo, useState } from "react"

import Screen from "./global/Screen"
import Category from "./Category"
import Card from "./global/Card"
import ListCategories from "./ListCategories"
import useCategories from "../hook/useCategories"


 function  ScreenCategories({ setIdCategorySel,setProductsFilter }){
   const { loading,categories } = useCategories()
   
   const eventClickCategories = ( idCategorySel ) => {
      setIdCategorySel(idCategorySel)
   }

   return (
        <Screen justify={'justify-start '} loading={loading} height={'h-full'} title="Seleccione una Categoria" typeScroll="horizontal" showTitleBar={false} >
          
          <ListCategories eventClickCategories={ eventClickCategories } categories={ categories } />
          
           
           
        {/*  <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/>
         <Category name="name test"/> */}
         
            
        </Screen>
    )
}

export default memo(ScreenCategories)