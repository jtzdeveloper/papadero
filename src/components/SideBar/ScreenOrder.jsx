import List from './List'
import ListItem from './ListItem'
import createOrder from '../../services/createOrder'
import { useEffect, useState } from 'react'
import { eventChangeOptionMenu, formatterPeso } from '../../constants'
import { useRef } from 'react'

export default function ScreenOrder({ order,setOrder,options,setOptions,response,setResponse }){
    const [create,setCreate] = useState(0)
    const [isError,setIsError] = useState(false)
    const inputName = useRef(null)
    
    
    const totales = order.line_items.length > 0 ? order.line_items.map(product => ({ total_price_product: (product.price * product.selectedQuantity ),total_quantity:product.selectedQuantity })) : [{total_price_product:0,total_quantity:0}]
    const subtotal = totales.reduce(function(sum, current) {
      return sum + current.total_price_product;
    }, 0)
    
    const totalQuantity = totales.reduce(function(sum, current) {
      return sum + current.total_quantity;
    }, 0)

    

     

    useEffect(()=>{
        if(order.line_items.length > 0 && create > 0){
            /* setLoading(true) */
            eventChangeOptionMenu(0, options, setOptions)
            const eventCreateOrder = () => {
                    const line_items = order.line_items.map(ord => 
                                                ord.type === 'simple' 
                                                    ? 
                                                    { product_id:ord.id,quantity:ord.selectedQuantity  } 
                                                    : 
                                                    { product_id:ord.id_product,variation_id:ord.id,quantity:ord.selectedQuantity })
                                                    
                    const newOrder = {
                        "status": "pending",
                        "billing": {
                            "first_name": inputName.current.value
                        },
                        "shipping": {
                            "first_name": inputName.current.value
                           },
                        line_items
                    }
                    
                    createOrder(newOrder).then(res => 
                        {
                            /* setLoading(false) */
                            eventChangeOptionMenu(5,options,setOptions)
                            setTimeout(() => {
                                setOrder({ line_items: [] })
                                eventChangeOptionMenu(1,options,setOptions)
                            }, 3000);
                             setResponse(res.data)
                            
                            /* eventChangeOptionMenu(2,options,setOptions) */
                            
                        }
                        )
            
                }
                eventCreateOrder()
        } else {
            setIsError(true)
        }
        
        
        
    },[create])

    return (
        <section className='h-[calc(100vh-68px)] animate-fade'>
            <section className={`h-[calc(100vh-320px)] ${order.line_items.length > 0 ? '' : 'flex justify-center items-center' }`}>
                {
                    order.line_items.length === 0 ? 
                        <span className='text-white font-bold '>Debe seleccionar productos</span> :   
                 (   
                        <List>
                            {order.line_items.map((product) => (
                                <ListItem key={product.id} product={product} order={order} setOrder={setOrder} />
                            ))} 
                        </List>
                    )
                }
               
            </section>
            
            <section className='flex  flex-col w-full text-slate-300 font-bold gap-2'>
               <section className='w-full flex text-lg '>
                    <section className='flex justify-start ml-5 w-4/5 text-[12px] font-bold  '>NOMBRE CLIENTE</section>
                    <section className=' flex '>
                        <input ref={inputName} type="text" className='rounded h-10 w-full text-center text-[18px] bg-slate-500 text-white font-bold' />
                    </section>
                </section>
               <section className='w-full flex text-lg'>
                    <section className='flex justify-start ml-5 w-4/5 text-[12px]  '>TOTAL DE ITEMS</section>
                    <section className='w-1/5 flex justify-start ml-20'>{totalQuantity}</section>
                </section>

                <section className='w-full flex text-lg'>
                    <section className='flex justify-start ml-5 w-4/5 text-[16px]   '>TOTAL A CONFIRMAR</section>
                    <section className='w-1/5 flex justify-start'> {formatterPeso.format(subtotal) }</section>
                </section>
                
            </section>
            
            <section className='flex  justify-center items-center w-full h-32 rounded-xl gap-3 '>
                <button onClick={() => setCreate(create + 1)} className='flex  
                                   justify-center 
                                   items-center
                                   text-white 
                                   rounded-sm 
                                   w-32 
                                   h-10
                                   bg-slate-900 
                                   font-semibold
                                    hover:bg-slate-400
                                    text-sm
                                     focus:bg-slate-900'>Crear Orden</button>
                                      <button className='flex  
                                   justify-center 
                                   items-center
                                   text-white 
                                   rounded-sm 
                                   w-32 
                                   h-10
                                   bg-slate-900 
                                   font-semibold
                                    hover:bg-slate-400
                                    text-sm
                                     focus:bg-slate-900'>Limpiar</button>
            </section>
        </section>
        
    )
}