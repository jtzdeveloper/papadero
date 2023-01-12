import Category from "./Category";

export default function ListCategories({ categories,eventClickCategories }){
    const categoriesOrder = categories.sort((a,b)=> a.menu_order - b.menu_order )
    console.log('ListCategories')
    
    return (
       /*  <div>a</div> */
       categoriesOrder.map(category=>(
            <Category event={eventClickCategories} id={ category.id } key={category.id} name={ category.name } image={category.image} countProducts={ category.count } />
        )) 
    )
}