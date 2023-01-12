import { eventChangeOptionMenu } from "../../constants"

export default function NavItem({ id, isActive,isVisible,options,setOptions, children }) {
    return (
      <li className={`${ !isVisible ? 'hidden' : '' } cursor-pointer`}>
        <a
          onClick={()=> eventChangeOptionMenu(id,options,setOptions)}
          className={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
        >
          {children}
        </a>
      </li>
    )
  }