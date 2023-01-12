import Screen from "./global/Screen";
import List from './SideBar/List'
import ListItem from './SideBar/ListItem'
import ButtonClose from "./global/ButtonClose";

export default function ScreenSelectedProducts({ order,setOrder,justify }){
    
  /*    const closeSelectedProduct = (idProductClose) => {
          const productsFilter = order.line_items.filter(productSelected => productSelected.id !== idProductClose)
          let orderCopy = {...order} 
          orderCopy.line_items = productsFilter
          console.log(orderCopy)
           setOrder(orderCopy) 
  } */
      
     return (
        <Screen height="h-[calc(100% - 100px)]" justify={justify} showTitleBar={false} typeScroll="horizontal" title="Productos Seleccionados">
       {/*      <List position="horizontal">
            {order.line_items.map((product) => (
                        <ListItem key={product.id} product={product} />
                    ))} 
            </List> */}
            
            {
                        order.line_items.map(productSelected => 
                             (
                              <article key={productSelected.id} className="flex w-full rounded-md md:w-96 ml-2 mr-3  bg-slate-800 items-start space-x-6 relative p-6">
                              <img src={productSelected.images.at(-1).src} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
                              <div className="min-w-0 relative flex-auto">
                                <h2 className="font-semibold text-slate-100 truncate pr-20">{productSelected.name}</h2>
                                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                  <div className="absolute top-0 right-0 flex items-center space-x-1">
                                    <dt className="text-sky-500">
                                      <ButtonClose key={productSelected.id} order={order} setOrder={setOrder} id={productSelected.id} >X</ButtonClose>
                                      {/* <div onClick={()=>closeSelectedProduct(productSelected.id)} className="flex justify-center items-center left-1 bottom-0 absolute w-5 h-5 text-slate-500 font-extrabold bg-slate-400 cursor-pointer ">X</div> */}
                                      {/* <svg width="16" height="20" fill="currentColor">
                                        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                      </svg> */}
                                    </dt>
                                    <dd>{/* {movie.starRating} */}</dd>
                                  </div>
                                  <div className={`mr-3 ${ productSelected.type === 'simple' ? 'hidden' : '' }`}>
                                    <dt className="sr-only">Rating</dt>
                                    <dd className="px-1.5 ring-1 ring-slate-200 rounded text-white"> {productSelected.option} </dd>
                                  </div>
                                  <div>
                                    <dt className="sr-only">Rating</dt>
                                    <dd className="px-1.5 ring-1 ring-slate-200 rounded  text-white"> {productSelected.categories.at(-1).name} </dd>
                                  </div>
                                  
                                  <div>
                                  
                                  
                                  </div>
                                  <div>
                                    <dt className="sr-only">Runtime</dt>
                                    <dd className="flex items-center">
                                      <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                        <circle cx="1" cy="1" r="1" />
                                      </svg>
                                     {/*  {movie.runtime} */}
                                    </dd>
                                  </div>
                                 <div className="flex-none w-full mt-2 font-normal">
                                    <dt className="sr-only">Cast</dt>
                                    <dd className="text-slate-400 font-bold text-sm">{ productSelected.selectedQuantity } x {productSelected.price}</dd>
                                  </div> 
                                </dl>
                              </div>
                            </article>
                             /*  <figure key={productSelected.id} className="relative flex-none bg-slate-800 rounded-md w-[300px] h-[70px] mb-1 mt-1">
                                   <figcaption className="flex items-center justify-center space-x-4">
                                        <img className="rounded-sm w-10 h-10" src={productSelected.images.at(-1).src} alt="" />
                                        <div className="flex-auto">
                                             <div className="text-base  font-bold text-slate-300">
                                                  <a>
                                                       <span className="absolute inset-0"></span>
                                                       {productSelected.name.toUpperCase()}
                                                  </a>
                                                  
                                             </div>
                                            
                                             <div className="text-white font-extrabold text-lg">${ productSelected.price }  </div>
                                        </div>
                                         <div className="flex w-12 h-12 rounded-full justify-center items-center text-white font-extrabold  bg-slate-400 absolute right-2 top-2 text-2xl">{productSelected.selectedQuantity}</div> 
                                   </figcaption>
                                   
                              </figure> */
                             )
                         ) 
                    }
        </Screen>
    )
}