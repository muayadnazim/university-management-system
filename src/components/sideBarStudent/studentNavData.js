import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
export  const  SideBarData =[
   {
       title:'Home',
       path:'/',
       icon: FaIcons.FaHome,
       className:'nav-text'

   },
   {
       title:'UpDate Profile',
       path:'/updateProfile',
        icon: CgIcons.CgProfile ,
       className:'nav-text'

   }
   ,  {
       title:'View Attendance',
       path:'/ViewAttendance',
       icon: FaIcons.FaCalendarAlt ,
       className:'nav-text'

   }
   ,
    {
        title: 'log out',
        path: '/logOut',
        icon: CgIcons.CgLogOut,
        className: 'nav-text'

    }
   
  
  
]