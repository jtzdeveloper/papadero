/* import srcImageCart from '../assets/icons/cart_option.png'
import Product from '../components/Product' */
export const optionsMenu = [
    {
        id: 1,
        name:'crear pedido',
       /*  component: () => Product, 
        img: srcImageCart, */
        selected:false 
    }
]

export const closeSelectedProduct = ({id,order,setOrder}) => {
    console.log(order)
    const productsFilter = order.line_items.filter(productSelected => productSelected.id !== id)
    let orderCopy = {...order} 
    orderCopy.line_items = productsFilter
    console.log(orderCopy)
     setOrder(orderCopy) 
}

export const eventChangeOptionMenu = (id,options,setOptions) => {
    const optionsChange = options.map(op=> op.id === id ? {...op, isActive:true } : {...op,isActive:false})
    setOptions(optionsChange)
  }

  export const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

  export const getImageProduct = ({products,product_id}) => {
    return products.find(prod=>prod.id === product_id).images.at(-1).src
  }
    
  