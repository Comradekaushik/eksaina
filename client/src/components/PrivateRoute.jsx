
// import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
function PrivateRoute({children}) {
  // const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); // Example: Check if token exists

  return isAuthenticated ? children : <Navigate to="/login" /> ;
}

export default PrivateRoute;
