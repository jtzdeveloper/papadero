import { useState,useEffect } from "react"
import {getOrders} from '../../services/getOrders' 
import ScreenLoading from "../global/ScreenLoading"
import ListOrderPending from './ScreenOrdersPending/ListOrdersPending'
import ScreenOrderPendingSelected from './ScreenOrdersPending/ScreenOrderPendingSelected'
import ScreenPayOrder from './ScreenOrdersPending/ScreenPayOrder'


/* import TicketPdf from '../TicketPdf/TicketPdf' */
export default function ScreenOrderPending({id,response,setResponse,options,setOptions,setIsVisibleNav,payments,order,setOrder,products,setProducts}){
    const [ordersPending,setOrdersPending] = useState([])
    const [orderPendingSelected,setOrderPendingSelected] = useState({})
/*     const { isLoading,data,isError,error,  } = useQuery({
        queryKey:['orders'],
        queryFn: getOrders
    }) */
    
    const optionSelected = options.find((option)=> option.id === id )
    
    const optionsComponents = {
        ScreenOrderPendingSelected,
        ListOrderPending,
        ScreenLoading,
        ScreenPayOrder
    }

    const loadScreen = (optionSel) => {
        const { menuOptions } = [...options].find(option => option.id === 2)
        const menuOptionEdit = menuOptions.map(option => option.id === optionSel ? {...option, isActive:true } : {...option, isActive:false } )
        const newOptions = options.map(op=>op.id === 2 ? {...op,menuOptions:menuOptionEdit} : {...op})
        setOptions(newOptions) 
      }
      
 /*    useEffect(()=>{
        const orders = () => {
            loadScreen(0) 
            getOrders().then(res => {
                loadScreen(2)
                setOrdersPending(res)
            })
        }
        orders()
    },[]) */
    return (
        <>
        {
            optionSelected.menuOptions.map((option)=>{
              const Component = optionsComponents[option.componentName]
              if(option.isActive){
                 return <Component  
                                key={ option.id }  
                                loadScreen={loadScreen} 
                                options={options} 
                                setOptions={setOptions} 
                                order={order}
                                setOrder={setOrder}
                                payments={payments}
                                products={products}
                                setProducts={setProducts}
                                setIsVisibleNav={setIsVisibleNav}
                                /* ordersPending={data}  */
                                /* setOrdersPending={setOrdersPending}  */
                                orderPendingSelected={orderPendingSelected} 
                                setOrderPendingSelected={setOrderPendingSelected} /> 
              }
            })
         
        /* Object.keys(orderPendingSelected).length > 0 ? 
        <ScreenOrderPendingSelected orderPendingSelected={orderPendingSelected} setOrderPendingSelected={setOrderPendingSelected} /> 
        :
        <ListOrderPending 
        ordersPending={ ordersPending } setOrderPending={ setOrderPending } orderPendingSelected={orderPendingSelected} setOrderPendingSelected={setOrderPendingSelected} /> */
    }</>
    )
}