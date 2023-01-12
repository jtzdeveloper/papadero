import ListItemOrder from './ListItemOrder'
import {getOrders} from '../../../services/getOrders'
import { useQuery } from "@tanstack/react-query"
import ScreenLoading from '../../global/ScreenLoading'

export default function ListOrdersPending({ options,
                                            setOptions,
                                            loadScreen,
                                            orderPendingSelected,
                                            setOrderPendingSelected,
                                            setIsVisibleNav}){

    const { isLoading,data,isError,error  } = useQuery({
        queryKey:['orders'],
        queryFn: getOrders
    })                                       
    console.log(data)
    if(isLoading) return <ScreenLoading text='Obteniendo Ordenes' />
    return(
        <section className={`w-full h-screen animate-fade ${ data.length === 0 ? 'flex justify-center items-center' : '' } `}>
            {
                data.length === 0 ? <span className='text-white font-bold'>No existen ordenes creadas</span> : 
            
            <ul className={`divide-y divide-slate-100 h-[calc(100vh-68px)] overflow-y-auto `}>
              {
                data.map(orderPending=>(
                <ListItemOrder key={orderPending.id} 
                            order={orderPending} 
                            loadScreen={loadScreen} 
                            orderPendingSelected={orderPendingSelected} 
                            setOrderPendingSelected={setOrderPendingSelected} 
                            options={options} 
                            setOptions={setOptions}
                            setIsVisibleNav={setIsVisibleNav} />
                ))
                }
                
            </ul>
        }
        </section>
    )
}