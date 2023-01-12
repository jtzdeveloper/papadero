import { useRef } from "react"
import { useReactToPrint } from "react-to-print";
import { formatterPeso } from "../../constants";
export default function Ticket({orderPendingSelected,setOrderPendingSelected,isVoucher=true}){
    const refTicket = useRef(null)
    const refTicketSup = useRef(null)
    const refTicketItems = useRef(null)
    
    const cleanClass = () =>{
        refTicketItems.current.classList = 'flex flex-col'
        refTicketSup.current.classList = 'flex flex-col min- justify-start items-start ml-8  h-[50%]'
    } 
    const addClass = () => {
        refTicketItems.current.classList = 'flex flex-col  overflow-y-auto'
        refTicketSup.current.classList = 'flex flex-col min- justify-start items-start ml-8  h-[40%]'
    }  

    

    const handlePrint = useReactToPrint({
        
        //${110}mm ${110}mm comanda  
        pageStyle: `@media print {
            @page {
                size: ${110}mm ${190}mm; 
                margin:0
            }
        }`,
        content: () => refTicket.current,
      
        onBeforeGetContent:  cleanClass,
        onAfterPrint: addClass
      });
      //h-[400px] w-[390px] comanda
    return (
        <section ref={refTicket} onClick={handlePrint}  className="font-serif w-[390px] h-full text-xs  flex flex-col justify-center items-center  bg-white">
        <section className="w-full h-full flex flex-col">
            <div className="flex justify-center items-center flex-col h-[10%]">
                <section className="font-medium">TICKET DE COCINA</section>
                <section className="">PAPADERO "PAPAS FRITAS CACERAS Y MAS"</section>
            </div>
            <div className="flex flex-col justify-start items-start ml-8 h-[10%] font-semibold">
                <label htmlFor="" className="flex justify-start items-start">N PEDIDO:<span className="ml-5">{ orderPendingSelected.id }</span></label>
                <label htmlFor="">CAJERO:<span className="ml-5">ADMINISTRADOR</span></label>
                <label htmlFor="">FECHA EMISION:<span className="ml-5">{orderPendingSelected.date_created}</span></label>
            </div>
            <div ref={refTicketSup} className="flex flex-col min- justify-start items-start ml-8  h-[40%]">
                <label htmlFor="" className="w-72 border-b-2 border-dashed  border-black">ITEMS</label>
                <section ref={refTicketItems} className="flex flex-col   overflow-y-auto  ">
                {
                    orderPendingSelected.line_items.map(order =>(
                        <label key={order.id} htmlFor="" className="text-sm">{ order.quantity }<span className="ml-12 text-sm">{order.name.toUpperCase()}</span></label>
                    ))
                }
                </section>
                
            </div>
            <div className={`flex ${!isVoucher ? 'hidden' : ''} flex-col  items-start ml-8 h-[30%] `}>
                <section><label htmlFor="" className="">ITEMS<span className="ml-64">{orderPendingSelected.totalItems}</span></label></section>
                <section><label htmlFor="">SUBTOTAL<span className="ml-44">{formatterPeso.format(orderPendingSelected.total)}</span></label></section>
                <section><label htmlFor="" className="text-2xl">TOTAL<span className="ml-36">{formatterPeso.format(orderPendingSelected.total)}</span></label></section>
                <section>EFECTIVO</section>
                <section>ENTREGADO<span className="ml-40">$8.900</span></section>
                <section className="w-72 border-b-2 border-dashed border-black">VUELTO<span className="ml-56">$0</span></section>
                <section className="w-full flex  justify-center mb-5 mt-5">GRACIAS POR SU PREFERENCIA</section>
            </div>
         </section>
    </section>
    )
}