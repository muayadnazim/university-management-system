import 'bootstrap/dist/css/bootstrap.css';

import '../css/adminPanel.css'
import NavBar from "./sideBarStudent/NavBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// compunts
import Home from "./sideBarStudent/StudentHome.jsx";
import UpdateProfile from "./sideBarStudent/UpdateProfile.jsx";
import ViewAttendance from "./sideBarStudent/ViewAttendance.jsx"
import LogOut from './sideBarAdmin/LogOut.jsx';


export default function amdinPanel () {

return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/updateProfile'  element={<UpdateProfile/>} />
          <Route path='/ViewAttendance' element={<ViewAttendance/>}  />
          <Route path='/logOut' element={<LogOut/>}  />
          
        
      </Routes>
    </BrowserRouter>
  
    
   
    </>
)
}