import { useRef } from "react"
import { useState } from "react"
import ScreenSelectedProducts from '../../ScreenSelectedProducts'
import NavSubMenu from '../../SideBar/NavSubMenu'
import {formatterPeso} from '../../../constants'
import { getImageProduct } from "../../../constants"
import Product from "../../Product"
export default function ScreenPayOrder({ orderPendingSelected,
                                         setOrderPendingSelected,
                                         loadScreen,
                                         products,
                                         payments,
                                         order,
                                         setOrder,
                                         setIsVisibleNav }){

  const [paymentSelected,setPaymentSelected] = useState({checked:'efectivo'})
  console.log(products)
  const ID_OPTION_LIST_ORDERS = 2
  const OPTION_PAYMENT_CASH = 'efectivo'
  const OPTION_PAYMENT_DEBIT = 'debito'
  const OPTION_PAYMENT_TRANSFER = 'transferencia'

  const refInputMount = useRef(null)
  const refChangePay = useRef(null) 
  const refMountProvided = useRef(null)
  const refInputMountProvided = useRef(null)


  const handleChange = e => {
    setPaymentSelected({
      checked:e.target.value
    })

    refInputMountProvided

  /*   let num = 0
    if(OPTION_PAYMENT_CASH !== paymentSelected.checked){
      num = orderPendingSelected.total
    } */
               
          
   /*  console.log(paymentSelected.checked)             
    refInputMount.current.innerText = formatterPeso.format(num)
    refInputMountProvided.current.value = formatterPeso.format(0)
    refChangePay.current.innerText = formatterPeso.format(0) */
   /*  refInputMount.current.value = e.target.value */
   
  }
  console.log(paymentSelected.checked)
  const onChangeAmount = e => {
    const mount = +e.target.value.replace('$','').replace('.','') 
    const change =  mount === 0 ? 0 : (mount - +orderPendingSelected.total )
    e.target.value  = formatterPeso.format(mount)
    refInputMount.current.innerText = e.target.value
    refChangePay.current.innerText = formatterPeso.format(change) 
  }
  
  const backLastMenu = (optionSel) => {
    loadScreen(optionSel)
    setOrderPendingSelected(orderPendingSelected)
    setIsVisibleNav(true)
   
  }

  const heightItems = () =>{
    const height = orderPendingSelected.line_items.length * 24
    console.log(orderPendingSelected.line_items.length > 3 ? 55 : height)
    return orderPendingSelected.line_items.length >= 3 ? 20 : height
  }

  console.log(orderPendingSelected)

  console.log(orderPendingSelected)
  return(
      <section className={`flex flex-col animate-fade gap-1 w-full h-screen items-center   bg-slate-800`}>
        <NavSubMenu  backLastMenu={ backLastMenu } /> 
        <section className="flex w-[97%] rounded flex-col justify-between bg-slate-700">
            <h1 className="w-full text-white flex justify-center font-bold text-[12px]  ">Seleccione medio de pago</h1>
            <div className="grid  grid-cols-3 space-x-2 rounded-xl bg-slate-900 p-2 m-1">
              <div>
                <input type="radio" name="option" id="1" className="peer hidden"  value="efectivo"  onChange={handleChange}  checked={paymentSelected.checked === "efectivo"} />
                <label for="1" className="block cursor-pointer select-none rounded-xl p-2 text-center text-white peer-checked:bg-slate-700 peer-checked:font-bold text-[12px]  peer-checked:text-white">Efectivo</label>
              </div>
            <div>
              <input type="radio" name="option" id="2" className="peer hidden" value="debito" onChange={handleChange} checked={paymentSelected.checked === "debito"} />
              <label for="2" className="block cursor-pointer select-none rounded-xl p-2 text-center text-white peer-checked:bg-slate-700 peer-checked:font-bold text-[12px]  peer-checked:text-white">Debito</label>
            </div>
            <div>
              <input type="radio" name="option" id="3" className="peer hidden" value="transferencia" onChange={handleChange}  checked={paymentSelected.checked === "transferencia"} />
              <label for="3" className="block cursor-pointer select-none rounded-xl text-white p-2 text-center peer-checked:bg-slate-700 peer-checked:font-bold text-[12px]  peer-checked:text-white">Transferencia</label>
            </div>
          </div>
          </section>  

       <section className={`flex ${paymentSelected.checked !== 'efectivo' ? 'hidden' : '' } flex-nowrap w-[97%] rounded flex-col gap-1 bg-slate-700`}>
              <h1 className="w-full  text-white flex justify-center font-bold text-[12px] ">          Ingrese monto  entregado (valor sobre { formatterPeso.format(orderPendingSelected.total)})</h1>
              <section className="flex justify-center items-center m-1 rounded-xl h-full ">
              <input ref={refInputMountProvided} onChange={onChangeAmount}  placeholder="$ 0" className="rounded-md h-12 w-full text-center text-2xl bg-slate-800 text-white font-bold" type="text" /></section>
          </section> 
          <section className=" w-[97%] py-1 bg-blueGray-50">
            <div className="w-full">
              <div className="relative  flex flex-col min-w-0 break-words w-full  shadow-lg rounded bg-slate-700 ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h6 className="font-semibold text-[16px] text-blueGray-700 text-white">Detalle Pedido {orderPendingSelected.id}</h6>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        See all
                      </button>
                    </div>
                  </div>
                </div>
     
                <div className="w-full">
                    <section className="flex items-center w-full px-4 bg-slate-900 text-white h-10 ">
                        <span className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-[12px] whitespace-nowrap p-4 text-lef w-[50%] font-semibold">Nombre Producto</span>
                        <span className=" border-t-0 px-10 align-middle border-l-0 border-r-0 text-[12px] whitespace-nowrap p-4 w-[30%] font-semibold   ">Precio</span>
                        <span className="border-t-0 px-10 align-middle border-l-0 border-r-0 text-[12px] whitespace-nowrap p-4 w-[20%] font-semibold">Cantidad</span>
                    </section> 
                  <section className={`text-white scroll-m-0 overflow-y-scroll h-[5rem]  `}>
                    {
                      orderPendingSelected.line_items.map(orderPending=>(
                        <section className="flex justify-around">
                          <span className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 text-left w-[50%]">{orderPending.name.toUpperCase()}</span>
                          <span className="flex justify-start  items-start border-t-0 px-10 align-middle border-l-0 border-r-0 text-xs w-[30%] whitespace-nowrap p-1  ">{formatterPeso.format(orderPending.price)}</span>
                          <span className="border-t-0 px-10 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 w-[20%]">{orderPending.quantity}</span>
                        </section> 
                      ))
                    }
                  </section>
                </div>
              </div>
              
            </div>
            
          </section>
             
        <section className="w-[97%] bg-slate-900 text-white text-[16px]  font-serif">
          <section className="flex justify-start items-start m-1 ">
              <div className="w-[80%]">Total a pagar</div>
              <div className="w-[20%]">{formatterPeso.format(orderPendingSelected.total)}</div>
          </section>
          <section className="flex justify-start items-start m-1">
              <div className="w-[80%]">Entregado</div>
              <div ref={refInputMount} className={`w-[20%] ${ paymentSelected.checked !== OPTION_PAYMENT_CASH ? 'hidden':'' }`}>$ 0</div>
              <div  className={`w-[20%] ${ paymentSelected.checked === OPTION_PAYMENT_CASH ? 'hidden' : ''}`}>{formatterPeso.format(orderPendingSelected.total)}</div>
          </section> 
          <section className="flex justify-start items-start m-1">
              <div  className="w-[80%]">Vuelto</div>
              <div ref={refChangePay} className={`w-[20%] ${ paymentSelected.checked !== OPTION_PAYMENT_CASH ? 'hidden': ''  }`} >$ 0</div>
              <div className={`w-[20%] ${ paymentSelected.checked === OPTION_PAYMENT_CASH ? 'hidden' : ''}`}>$ 0</div>
          </section> 
        </section> 
        <section className="flex flex-row w-[97%] bg-slate-500 rounded ">
            <button className="w-1/2 h-10 bg-slate-900 m-1 rounded text-white font-bold">Cerrar Venta</button> 
            <button className="w-1/2 rounded bg-slate-700 m-1 text-white font-bold">Cancelar</button>       
        </section>      

      </section>
    )
}