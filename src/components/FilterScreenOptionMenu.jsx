import ScreenOptionMenuCart from './ScreenOptionMenuCart'

export default function FilterScreenOptionMenu({ order,menuOptions }){
    const componentMapping = {
        ScreenOptionMenuCart
    }
    return (
        <div>
            {menuOptions.map((option)=>{
            const Component = componentMapping[option.componentName]
            if(option.selected){
                return <Component order={order} />
            }
        return 
      })

      }
        </div>
    )
}