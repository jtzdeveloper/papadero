import { useState,useEffect } from "react"
import { useQuery,useMutation, QueryClient, useQueryClient } from "@tanstack/react-query"
import { eventChangeOptionMenu } from '../../../constants/'
import deleteOrder from '../../../services/deleteOrder'
import ScreenLoading from "../../global/ScreenLoading"

export default function ListItemOrder({ order,orderPendingSelected,setOrderPendingSelected,options,setOptions,loadScreen,setIsVisibleNav }){
const queryClient = useQueryClient()
  const deleteOrderMutation = useMutation({
      mutationFn: deleteOrder,
       
      onSuccess: () => {
        queryClient.invalidateQueries('orders')
      }  
  })
  
  console.log(deleteOrderMutation.isLoading)
  const click = (optionSel) => {
    loadScreen(optionSel)
    setOrderPendingSelected(order)
    setIsVisibleNav(false)
  }



  return (
        <article className={`flex items-start space-x-6 p-6 ${ deleteOrderMutation.isLoading ? 'bg-red-400' : ''} `}>
       {/*  <img src={product.images.at(-1).src} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" /> */}
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-100 truncate pr-20">Orden Nº {order.number}</h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500 text-lg">
                <span className="sr-only">Star rating</span>
                <section className=" flex w-full flex-wrap bg-slate-900 rounded">
                <div onClick={() => click(1)} 
                        className="border
                        text-xs
                             border-gray-700
                              bg-gray-700
                               text-white 
                               rounded-md 
                               px-4 
                               py-2 
                               m-2 
                               transition 
                               duration-500 
                               ease 
                               select-none
                                hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        +
      </div>
      <div onClick={()=>click(3)} 
                        className="border
                        text-xs
                             border-gray-700
                              bg-gray-700
                               text-white 
                               rounded-md 
                               px-4 
                               py-2 
                               m-2 
                               transition 
                               duration-500 
                               ease 
                               select-none
                                hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        o
      </div>
      <div onClick={()=> deleteOrderMutation.mutate(order.id) } className="border
                        text-xs
                             border-gray-700
                              bg-gray-700
                               text-white 
                               rounded-md 
                               px-4 
                               py-2 
                               m-2 
                               transition 
                               duration-500 
                               ease 
                               select-none
                                hover:bg-gray-800 focus:outline-none focus:shadow-outline">-

      </div>
                </section>
               {/*  <svg width="16" height="20" fill="currentColor">
                  <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg> */}
                {/* <ButtonClose id={product.id} order={order} setOrder={setOrder} >x</ButtonClose> */}
              </dt>
              <dd>{/* {movie.starRating} */}</dd>
            </div>
            <div className={``}>
              <dt className="sr-only">Rating</dt>
              <dd className="px-1.5 ring-1 ring-slate-200 rounded text-white bg-yellow-600 font-bold"> {order.status} </dd>
            </div>
            <div className="flex gap-3">
              <dt className="sr-only">Rating</dt>
              <dd className="px-1.5 ring-1 ring-slate-200 rounded text-white"> {order.number} </dd>
            </div>
            
            <div className="ml-2">
              <dt className="sr-only">Year</dt>
              <dd>{/* {movie.year} */}</dd>
            </div>
            <div>
              <dt className="sr-only">Genre</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {/* {movie.genre} */}aa
              </dd>
            </div>
            <div>
              <dt className="sr-only">Runtime</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
               {/*  {movie.runtime} */}111
              </dd>
            </div>
           <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Cast</dt>
              {/* <dd className="text-slate-400 font-bold text-sm">{ product.selectedQuantity } x {product.price}</dd> */}
            </div> 
          </dl>
        </div>
      </article>
    )
}