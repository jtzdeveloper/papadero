import { useRef } from "react"
import { useReactToPrint } from "react-to-print";
import Ticket from "../../Ticket/Ticket";

export default function ScreenOrderPendingSelected({ orderPendingSelected,setOrderPendingSelected,loadScreen }) {
    
    
    return (
        <section className="w-full h-full  flex flex-col gap-2">
            <section onClick={()=>loadScreen(2)} className=" bg-slate-300" >Volver</section>
             <Ticket orderPendingSelected={orderPendingSelected} setOrderPendingSelected={setOrderPendingSelected}  /> 
            
        </section> 
    )
}