export default function ScreenScroll({children, typeScroll,height,justify='justify-center'}){
    
    const scroll = typeScroll === 'vertical' ? '  flex-wrap h-full  overflow-y-auto' : ` flex-nowrap overflow-x-auto`
    return (
        <section className={`flex     w-full ${justify}      ${ scroll } mt-1 gap-1`}> 
            {
                children
            }
        </section>
    )
}