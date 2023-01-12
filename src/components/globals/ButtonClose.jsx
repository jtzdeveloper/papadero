import { closeSelectedProduct }  from "../../constants";

export default function ButtonClose({id,order,setOrder,children}){
    return (
        <button onClick={()=> closeSelectedProduct({id,order,setOrder})} className="flex 
                           justify-center 
                           items-center 
                           left-1 bottom-0 
                           absolute 
                           rounded-sm
                           w-5 h-5
                           text-slate-500 
                            font-extrabold
                             bg-slate-400 
                             cursor-pointer">{ children }</button>
    )
}