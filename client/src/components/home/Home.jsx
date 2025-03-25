import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeSideBar from './HomeSideBar';
import HomeMain from './HomeMain';
import "./styles/home.css";



export default function Home() {
  return (
    <div className='home-principal'>
        
        <HomeHeader/>
        <HomeSideBar/>
        <HomeMain/>
        

        
    
    </div>
    
  )
}
