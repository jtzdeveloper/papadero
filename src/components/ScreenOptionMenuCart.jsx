export default function ScreenOptionMenuCart({order}){
    console.log(order)
    return(
        <section className="flex flex-col m-3 gap-10">
            <section className="flex w-full bg-slate-200">Titulow</section>
            <section className="bg-slate-200 rounded-lg w-full  flex flex-col gap-3 flex-wrap">
                {
                    order.line_items.map(ord => 
                        <figure className="h-28 flex justify-center items-center m-1 bg-slate-400 rounded-xl">
                            <img src={ord.images.at(-1).src} className="w-1/5 h-[90%]  bg-slate-800 flex  justify-center items-center text-white rounded-xl m-1" />
                            <figcaption className="w-4/5 h-[90%] flex flex-col  m-1">
                                <span className="w-full h-1/2 text-white text-lg font-bold m-1">{ord.name.toUpperCase()}</span>
                                <span className="m-1 text-lg text-white font-bold">{ord.quantity} x ${ord.price}</span>
                            </figcaption>
                        </figure>
                    )
                }
                
                
            </section>
        </section>
    )
}