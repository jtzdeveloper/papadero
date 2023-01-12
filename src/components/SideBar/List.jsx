export default function List({ children, position='',orderPendingSelected={} }) {
  const positionDiv = position === 'horizontal' ? 'flex' : ''  
  
 
 console.log('List') 
  return (
      <ul className={`${positionDiv} divide-y divide-slate-100 h-[calc(100vh-320px)] overflow-y-auto `}>
        {children }
      </ul>
    )
  }