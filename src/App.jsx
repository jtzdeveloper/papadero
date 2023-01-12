import { useEffect, useState } from 'react'
import Content from './components/globals/Content'
import ScreenCategories from './components/ScreenCategories'
import getProducts from "./services/getProducts"
import ScreenProducts from './components/ScreenProducts'
import getPayments from './services/getPayments'
import Drawer from './components/globals/Drawer'
import Movies from './components/SideBar/Movies' 
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer'
import MainMenuOptions from './components/MainMenuOptions'
import { useCallback } from 'react'



function App() {
  const [products,setProducts] = useState([])
  const [payments,setPayments] = useState([])
  const [productsFilter, setProductsFilter] = useState([])
  const [idCategorySel,setIdCategorySel] = useState(0)
  const [isOpen,setIsOpen] = useState(false)
  /* const [optionSelected,setOptionSelected] */
  const [order,setOrder] = useState({
    line_items: []
  })

  

  const addProductOrder =  useCallback((currentValue) => {
    setProductsFilter(prevValue => [...prevValue , currentValue])
  },[])

  const [menuOptions,setMenuOptions] = useState([{
    id:1,
    name:'OptionCart',
    selected:true,
    componentName: 'ScreenOptionMenuCart'
}/* ,
{
    id:2,
    name:'Categories',
    selected:false,
    componentName: 'FilterCategories'
} */])


  useEffect(()=>{
    const downloadPayments = () => {
      getPayments().then(resp=>{
        setPayments(resp)
      })
    }

    downloadPayments()
  },[])

  useEffect(() => {
    const downloadProducts = () =>{
      getProducts().then(resp => {
        setProducts(resp)
      })
    }
    downloadProducts()
  },[])
  /*  useEffect(()=>{
    getProducts(10,1).then(prods=>{
      console.log(prods)
    })
  },[]) */
  return (
    <Content>
      <div className='flex  h-[145px]  bg-slate-700'>
        <ScreenCategories setIdCategorySel={setIdCategorySel}  />
      </div>
   
   
      <div className='flex h-[calc(100vh-220px)]  bg-slate-700'>
         <ScreenProducts order={order} setOrder={setOrder} idCategorySel={idCategorySel} products={products} setProducts={setProducts} productsFilter={productsFilter} setProductsFilter={setProductsFilter} /> 
      </div>
    
      <Footer>
          <MainMenuOptions menuOptions={ menuOptions } isOpen={ isOpen } setIsOpen={setIsOpen} order={order} />
          <Drawer isOpen={ isOpen } setIsOpen={ setIsOpen }>
           
            <SideBar>
                 <Movies order={order} setOrder={setOrder} payments={payments} products={products} setProducts={setProducts }/> 
                
            </SideBar>
           
            
          </Drawer>
          
      </Footer> 
  
     
    </Content>
  )
}

export default App
