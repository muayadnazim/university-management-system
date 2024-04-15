
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: FaIcons.FaHome,
        className: 'nav-text'

    },
    {
        title: 'UpDate Profile',
        path: '/updateProfile',
        icon: CgIcons.CgProfile,
        className: 'nav-text'

    }
    , {
        title: 'Add Result',
        path: '/AddResult',
        icon: FaIcons.FaPoll,
        className: 'nav-text'

    }
    , {
        title: 'Edit Result',
        path: '/EditResult',
        icon: FaIcons.FaTh,
        className: 'nav-text'

    }
    , {
        title: 'Take Attendance',
        path: '/TakeAttendance',
        icon: FaIcons.FaCalendarAlt,
        className: 'nav-text'

    }, {
        title: 'Update Attendance',
        path: '/UpdateAttendance',
        icon: FaIcons.FaTh,
        className: 'nav-text'

    }
    ,
    {
        title: 'log out',
        path: '/logOut',
        icon: CgIcons.CgLogOut,
        className: 'nav-text'

    }

]