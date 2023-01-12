
export default function Card({id,image = null,title,size,event}) {
    
    return (
        <div onClick={ ()=> event(id) }  className='bg-gray-400 hover:scale-125 lg:hover:scale-110  rounded flex-none w-[130px] h-[120px] lg:w-[190px] lg:h-[160px]  shadow-xl shadow-black  '>
            <section className='flex flex-col w-full flex-wrap'>
                <article className='flex w-full h-24 lg:h-32 justify-center items-center'><img src={image !== null ? image.src : ''} alt="" /></article>
                <div className='bg-yellow-400 text-xs rounded text-white justify-center flex h-8 font-bold items-center w-full'>{ title }</div>
            </section>
        </div>
    )
}