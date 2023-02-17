import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGet = (url)=>{
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async()=>{
    try {
      const {data} = await axios.get(url);
      console.log({data});
      setState(data.data || data);
      setLoading(false);
    } catch (error) {
      toast.error("Error en la conexión. Intente nuevamente mas tarde.")
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return [state, loading, getData]
}

export default useGet;