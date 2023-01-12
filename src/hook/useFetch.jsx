import { useState } from "react"
import { woocommerce } from "./woocommerce";

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        woocommerce.get(url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [url]);

      return { data,loading }
}

export default useFetch