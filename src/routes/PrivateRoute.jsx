import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner/Spinner";
import axios from "../config/axios";

const PrivateRoute = ({children}) => {
    const[user,setUser]= useState(false);
    const [loading, setLoading]= useState(true);
    const getAuth= async()=>{
        try {
            const token = localStorage.getItem("token");
            if(!token){
                setLoading(false);
                return setUser(false);
            } 
            axios.defaults.headers.common["Authorization"] = token
            const {data} = await axios.get("/users/auth")
            setUser(data.user)
            setLoading(false)
        } catch (error) {
            toast.error("Error en la autenticacion. Ingrese nuevamente")
        }
        setLoading(false)
    };
    useEffect(()=>{
        getAuth();

    }, [] );

    return loading? <Spinner/> : !!user? children : <Navigate to="/login"/>
}
 
export default PrivateRoute;