import { useEffect, useState } from 'react'
import Content from './components/global/Content'
import ScreenCategories from './components/ScreenCategories'
import getProducts from "./services/getProducts"
import ScreenProducts from './components/ScreenProducts'
import getPayments from './services/getPayments'
import ScreenSelectedProducts from './components/ScreenSelectedProducts'
import Drawer from './components/global/Drawer'
import Movies from './components/SideBar/Movies' 
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer'
import MainMenuOptions from './components/MainMenuOptions'
import { useCallback } from 'react'
import { useQuery } from "@tanstack/react-query"
import Logo from './components/global/Logo'
import ScreenLoading from './components/global/ScreenLoading'

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
   
    {/*  <div className=' flex h-[140px] bg-slate-400'>
        <ScreenSelectedProducts justify={'justify-start'}  order={order} setOrder={setOrder} />
      </div>   */}
      <div className='flex h-[calc(100vh-220px)]  bg-slate-700'>
         <ScreenProducts order={order} setOrder={setOrder} idCategorySel={idCategorySel} products={products} setProducts={setProducts} productsFilter={productsFilter} setProductsFilter={setProductsFilter} /> 
      </div>
     {/*  <Logo/> */}
      <Footer>
          <MainMenuOptions menuOptions={ menuOptions } isOpen={ isOpen } setIsOpen={setIsOpen} order={order} />
          <Drawer isOpen={ isOpen } setIsOpen={ setIsOpen }>
           
            <SideBar>
                 <Movies order={order} setOrder={setOrder} payments={payments} products={products} setProducts={setProducts }/> 
                
            </SideBar>
           
            
          </Drawer>
          
      </Footer> 
    {/*   <div className='flex w-full h-[70px] justify-center   bg-slate-800'>
        <div className='flex justify-center items-center relative cursor-pointer'>
          <img className='w-12 h-12' src={imageCartOption} alt="" onClick={()=> setIsOpen(true)} />
          <section className='w-5 h-5 left-10 bottom-10  absolute justify-center items-center  font-bold flex bg-red-600 rounded-full text-white'>0</section>
        </div>
        
      </div> */}
      
      {/* <button onClick={()=> setIsOpen(true)}>view details</button> */}
      {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div class="table w-full ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div>
      </Drawer> */}
     {/*  <ScreenCategories setIdCategorySel={setIdCategorySel}  /> */}
      {/* <ScreenSelectedProducts order={order} /> */}
      {/* <ScreenContainer> */}
        
        {/* <ScreenProducts order={order} setOrder={setOrder} idCategorySel={idCategorySel} products={products} setProducts={setProducts} productsFilter={productsFilter} setProductsFilter={setProductsFilter} /> */}
       {/*  <ScreenPay /> */}
      {/* </ScreenContainer>  */}
     {/*  <Screen title="Seleccione Productos" sizeScreen={250}>as</Screen>
      <Screen title="Seleccione Productos" sizeScreen={250}>as</Screen> */}
     {/*  <Screen title="Products Selected">
        a
      </Screen> */}
     {/*  <section className='flex mt-2 w-full h-80 bg-gray-200'>
        <div className='flex justify-center items-center font-bold text-white bg-yellow-300 w-full h-10 '>Selección de Productos</div>
        <div>

        </div>
      </section> */}
      {/* <section className='bg-gray-200 mt-2 h-80'>
a
      </section> */}
     
    </Content>
  )
}

export default App
