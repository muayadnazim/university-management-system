

import "./NavBar.css"
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import {SideBarData} from "./StaffNavData.js"
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import  {useState} from 'react';
import {signOut} from  "firebase/auth";
import { auth } from "../config/firebase.js";

export default function NavBare () {
    
 const [sideBar,setSideBar] = useState(false);
 const showSideBar = ()=>setSideBar(!sideBar)
    return (
     <>
        
    
        <IconContext.Provider value={{ color: '#fff' }}>
    <div className="navbar">
        
        <Link to="#" className="menu-bars">
         <FaIcons.FaBars onClick={showSideBar}/>
        </Link>
    </div>
     <nav className={sideBar?'nav-menu active':'nav-menu'}>   
    <ul className="nav-bar-item"  onClick={showSideBar} >
  
        <li className="navbar-toggle">
            <Link to='#' className="menu-bars">
            <IoIcons.IoMdClose />
            </Link>
            </li>

              <li><div className="sideBar">
      
      <div className="logo_bar">
          <img src="../src/image/logo.png" alt="" />
          <span>Staff Panel</span>
  </div>
  </div></li> 
          {SideBarData.map((item,index)=>{
            
           return (

            <li key={index} className={item.className}>
            <Link to={item.path} onClick={()=>{if(item.path==="/logOut"){ signOut(auth);
        window.location.reload() }}}>
                 <item.icon/>
                <span>{item.title}</span>
            </Link>
        </li>
           );
          })}
        
        </ul>
    
    </nav> 

    </IconContext.Provider>
  </>

)

}