import { useEffect, useState } from "react"
import getOrders from "../services/getOrders"

export default function useOrders(){
    const [loading,setLoading] = useState(false)
    const [orders,setOrders] = useState([])
    
    useEffect(()=>{
        setLoading(true)
        getOrders().then(dataOrders => {
            setOrders(dataOrders)
            setLoading(false)
        })
    },[])

    return { loading,orders }
}