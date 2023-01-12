export default function Content({children}){
    return (
        <section className="flex flex-col  h-screen max-h-full bg-gray-700">
       
        { children }
       
       
        </section>
     /*    <section className="w-full h-screen bg-gray-700">
             <div className='w-full   flex flex-col gap-4'>
             { children }
             </div>
            
        </section> */
    )
}