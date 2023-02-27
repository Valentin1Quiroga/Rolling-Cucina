import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return ( user?.role==="admin"? children : <Navigate to="/home"/> );
}
 
export default AdminRoute;