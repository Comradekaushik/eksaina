import React from 'react'
import "../entry/Entry.css";
import hamburgermenusvg from "../../../assets/images/burger-menu-svgrepo-com.svg"
export default function EntryHeader() {
  return (

    <div id="entry-header-main">

        <div>
          <img src={hamburgermenusvg}/>
          
        </div>
        <div>
          <button>Login</button>
        </div>
    </div>
  )
}
