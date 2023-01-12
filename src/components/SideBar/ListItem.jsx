import ButtonClose from "../global/ButtonClose"

export default function ListItem({ product,order,setOrder }) {
    return (
      <article className="flex items-start space-x-6 p-6">
         <img src={product.images.at(-1).src} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-100 truncate pr-20">{product.name}</h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
            
                <ButtonClose id={product.id} order={order} setOrder={setOrder} >x</ButtonClose>
              </dt>
              
            </div>
            <div className={`${ product.type === 'simple' ? 'hidden' : '' } m`}>
              <dt className="sr-only">Rating</dt>
              <dd className="px-1.5 ring-1 ring-slate-200 rounded text-white"> {product.option} </dd>
            </div>
            <div className="flex gap-3">
              <dt className="sr-only">Rating</dt>
              <dd className="px-1.5 ring-1 ring-slate-200 rounded text-white"> {product.categories.at(-1).name} </dd>
            </div>
            
            <div className="ml-2">
              <dt className="sr-only">Year</dt>
              
            </div>
            <div>
              <dt className="sr-only">Genre</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                
              </dd>
            </div>
            <div>
              <dt className="sr-only">Runtime</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
              
              </dd>
            </div>
           <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Cast</dt>
              <dd className="text-slate-400 font-bold text-sm">{ product.selectedQuantity } x {product.price}</dd>
            </div> 
          </dl>
        </div>
      </article>
    )
  }