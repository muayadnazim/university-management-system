import 'bootstrap/dist/css/bootstrap.css';

import '../css/adminPanel.css'
import NavBar from "./sideBarStaff/NavBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// compunts
import Home from "./sideBarStaff/StaffHome.jsx";
import UpdateProfile from "./sideBarStaff/UpdateProfile.jsx";
import AddResult from "./sideBarStaff/AddResult.jsx"
import EditResult from "./sideBarStaff/EditResult.jsx"
import TakeAttendance from "./sideBarStaff/TakeAttendance.jsx"
import UpdateAttendance from "./sideBarStaff/UpdateAttendance.jsx"
import AddSession from "./sideBarAdmin/AddSession.jsx"
import ManageSession from "./sideBarAdmin/ManageSession.jsx"
import AddStaff from "./sideBarAdmin/AddStaff.jsx"
import ManageStaff from "./sideBarAdmin/ManageStaff.jsx"
import AddStudent from "./sideBarAdmin/AddStudent.jsx"
import ManageStudent from "./sideBarAdmin/ManageStudent.jsx"
import NotifyStaff from "./sideBarAdmin/NotifyStaff.jsx"
import NotifyStudent from "./sideBarAdmin/NotifyStudent.jsx"
import ViewAttendance from "./sideBarAdmin/ViewAttendance.jsx"
import LogOut from './sideBarAdmin/LogOut.jsx';
export default function amdinPanel () {

return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/updateProfile'  element={<UpdateProfile/>} />
          <Route path='/AddResult' element={<AddResult/>}  />
          <Route path='/EditResult' element={<EditResult/>}  />
          <Route path='/TakeAttendance' element={<TakeAttendance/>}  />
          <Route path='/UpdateAttendance' element={<UpdateAttendance/>}  />
          <Route path='/AddSession' element={<AddSession/>}  />
          <Route path='/ManageSession' element={<ManageSession/>}  />
          <Route path='/AddStaff' element={<AddStaff/>}  />
          <Route path='/ManageStaff' element={<ManageStaff/>}  />
          <Route path='/AddStudent' element={<AddStudent/>}  />
          <Route path='/ManageStudent' element={<ManageStudent/>}  />
          <Route path='/NotifyStaff' element={<NotifyStaff/>}  />
          <Route path='/NotifyStudent' element={<NotifyStudent/>}  />
          <Route path='/ViewAttendance' element={<ViewAttendance/>}  />
          <Route path='/logOut' element={<LogOut/>}  />
        
      </Routes>
    </BrowserRouter>
  
    
   
    </>
)
}