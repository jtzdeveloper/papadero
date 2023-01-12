import Nav from './Nav'
import NavItem from './NavItem'
 import ScreenOrder from './ScreenOrder' 
 import ScreenOrderPending from './ScreenOrderPending' 
import ScreenLoading from '../globals/ScreenLoading'
import ScreenResult from '../globals/ScreenResult'

import { eventChangeOptionMenu } from '../../constants'
import { useEffect, useState } from 'react'

export default  function Movies({ order,setOrder,payments,products,setProducts }) {
  const [options,setOptions] = useState([{
    id:1,
    name: 'Orders',
    componentName:'ScreenOrder',
    isActive:true,
    isVisible:true,
    menuOptions:{}
  },{
    id:2,
    name: 'Orders Pending',
    componentName:'ScreenOrderPending',
    isActive:false,
    isVisible:true,
    menuOptions: [
                  {
                    id: 0,
                    name:'Loading',
                    componentName: 'ScreenLoading',
                    isActive:false
                  },
                  {
                    id: 1,
                    name:'View Ticket',
                    componentName: 'ScreenOrderPendingSelected',
                    isActive:false
                   },
                  {
                    id: 2,
                    name:'View PDF print',
                    componentName: 'ListOrderPending',
                    isActive:true
                  },
                  {
                    id: 3,
                    name:'Screen Pay Order',
                    componentName: 'ScreenPayOrder',
                    isActive:false
                  }
                  
                ]
  },
  {
    id:3,
    name: 'Orders Completed',
    componentName:'ScreenOrderCompleted',
    isActive:false,
    isVisible:true,
    menuOptions:{}
  },{
    id:0,
    name:'Loading',
    componentName:'ScreenLoading',
    isActive:false,
    isVisible:false,
    menuOptions:{}

  },{
    id:5,
    name:'Screen Result',
    componentName: 'ScreenResult',
    isActive:false,
    isVisible:false,
    menuOptions:{}
  }
  
  /* ,{
    id:4,
    name:'Screen Pay Order',
    componentName: 'ScreenPayOrder',
    isActive:false,
    isVisible:false
  } */])

  const [response,setResponse] = useState({})
  const [isVisibleNav,setIsVisibleNav] = useState(true)
  const optionsComponents = {
    ScreenOrder,
    ScreenLoading,
    ScreenOrderPending,
    ScreenResult
  }

  useEffect(()=> {
       
    if(Object.keys(response).length > 0)
    {
        /* eventChangeOptionMenu(0,options,setOptions)
        setTimeout(() => {
          eventChangeOptionMenu(2,options,setOptions)
        },3000)
        
        console.log(response) 
        console.log('into') */
    }

    /* return () => {
      clearTimeout(timer)
    } */

   
},[response]) 

 /*  const eventChangeOptionMenu = (idOption) => {
    const optionsChange = options.map(op=> op.id === idOption ? {...op, isActive:true } : {...op,isActive:false})
    setOptions(optionsChange)
  } */

  return (
      <div className="divide-y divide-slate-100 h-screen ">
        <Nav isVisible={ isVisibleNav }>
          {
            options.map(option=>(
              <NavItem 
                id={option.id}
                key={option.id}
                isVisible={option.isVisible} 
                options={options}
                setOptions={setOptions}
                isActive={option.isActive}>
                  {option.name}
              </NavItem>
            ))
          }
      </Nav> 
       
       {
          options.map((option)=>{
            const Component = optionsComponents[option.componentName]
            if(option.isActive){
               return <Component key={ option.id } 
                                 id={ option.id }  
                                 isActive={option.isActive} 
                                 order={order} 
                                 setOrder={setOrder} 
                                 payments={payments}
                                 text={'Creando orden'}
                                 products={products}
                                 setProducts={setProducts}
                                 setIsVisibleNav={setIsVisibleNav}
                                 options={options} 
                                 setOptions={ setOptions } 
                                 response={response} 
                                 setResponse={setResponse} /> 
            }
          })
       } 
         
       
      </div>
    )
  }