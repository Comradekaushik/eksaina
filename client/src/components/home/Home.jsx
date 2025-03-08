import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import HomeHeader from './HomeHeader';



export default function Home() {
  return (
    <>
        <div>Home</div>
        <HomeHeader/>


        <Outlet/>
    
    </>
    
  )
}
