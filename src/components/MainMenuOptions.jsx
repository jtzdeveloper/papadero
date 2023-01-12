import OptionCart from "./OptionCart";


export default function MainMenuOptions({ menuOptions,isOpen, setIsOpen,order }){
    console.log(order)
     const totalProductsAdd = order.line_items.reduce((accumulator,current)=> accumulator + current.selectedQuantity,0)
     console.log(totalProductsAdd)
    return (
        <section className='flex'>
            <OptionCart setIsOpen={setIsOpen} totalProductsAdd={totalProductsAdd} />
        </section>
    )
}