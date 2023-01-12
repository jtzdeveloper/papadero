export default function CardCategory({id,image = null,title,size,event,countProducts}){
    console.log('CardCategory')
    return (
        <div  onClick={()=>event(id)} className="flex cursor-pointer animate-fade flex-none w-full md:w-[300px] md:h-[120px]  items-center justify-center bg-white border rounded-lg shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-20 h-20  rounded-t-lg  lg:h-auto lg:w-48 lg:rounded-none md:rounded-l-lg" src={image !== null ? image.src : ''} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{countProducts} productos</p>
            </div>
        </div>

    )
}