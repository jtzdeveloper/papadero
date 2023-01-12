import { useEffect, useState } from "react"
import getCategories from "../services/getCategories"

export default function useCategories(){
    const [loading,setLoading] = useState(false)
    const [categories,setCategories] = useState([])
    
    useEffect(()=>{
        setLoading(true)
        getCategories().then(dataCategories => {
            setCategories(dataCategories)
            setLoading(false)
        })
    },[])

    return { loading,categories }
}