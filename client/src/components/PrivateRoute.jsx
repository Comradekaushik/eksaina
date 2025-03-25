
import { useNavigate } from "react-router-dom";

function PrivateRoute({children}) {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); // Example: Check if token exists

  return isAuthenticated ? children : navigate("/login") ;
}

export default PrivateRoute;
