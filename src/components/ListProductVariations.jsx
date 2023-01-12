import { useState } from "react"

export default function ListProductVariations({ loading,variations,product,addProduct }){
   
    return(
           loading ?(
            <div className="flex flex-col gap-3 mr-1 mt-1 animate-pulse">
           <section className="flex justify-center items-center gap-5 bg-slate-600 rounded-sm w-32 h-8 text-white text-xs font-bold">
                <div></div>
                <div></div>
            </section>
            <section className="flex justify-center items-center gap-5 bg-slate-600 rounded-sm w-32 h-8 text-white text-xs font-bold">
                <div></div>
                <div></div>
            </section>
            <section className="flex justify-center items-center gap-5 bg-slate-600 rounded-sm w-32 h-8 text-white text-xs font-bold">
                <div></div>
                <div></div>
            </section>
            </div>)
        :  (
            <div className="flex flex-col gap-3 mr-1 mt-1">
            {variations.map(variation => (
                <section onClick={()=> addProduct(product,variation )} key={ variation.id } className="flex justify-center items-center gap-5 bg-slate-600 rounded-sm w-32 h-8 text-white text-xs font-bold">
                    <div>{ variation.option.toUpperCase()}</div>
                    <div>${ variation.price }</div>
                </section>
                ))}
            </div>
        )
        
        
    ) 
}