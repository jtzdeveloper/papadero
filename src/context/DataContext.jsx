import { useState } from "react";

export function DataProvider({children}){
    const [data,setData] = useState({categories:[{ id:1,name:'papas',order:1},{ id:3,name:'salsas',order:2},{ id:3,name:'combos',order:3 }] })
}