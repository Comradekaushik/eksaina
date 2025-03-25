import React from 'react';
import LoginLeftSlideshow from './LoginLeftSlideshow';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem("token");
  if(isAuthenticated){
    navigate("/home");
  }
  
  const myobj = {
    slides : [ //slides images URL
      "https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg",
      "https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg",
    ],
  }
  return (
    <div id="login-path-principal-component">
      <LoginHeader/>
      <LoginLeftSlideshow {...myobj}/>
      <LoginForm/>
      <Outlet/>
        
        
    </div>
  )
}

export default Login;