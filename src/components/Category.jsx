import CardCategory from './global/CardCargory'

export default function Category({ id,image,name,event,countProducts }){
   return (
        <CardCategory countProducts={countProducts} event={event} id={id} title={ name } image={image} />
    )
}

