import imageCartOption from '../assets/icons/cart_option.png'

export default function OptionCart({setIsOpen,totalProductsAdd}){
    return (
        <div className='flex justify-center items-center relative cursor-pointer'>
            <img className='w-12 h-12' src={imageCartOption} alt="" onClick={()=> setIsOpen(true)} />
            <section className='w-5 h-5 left-10 bottom-10  absolute justify-center items-center  font-bold flex bg-red-600 rounded-full text-white'>{totalProductsAdd}</section>
        </div>
    )
}