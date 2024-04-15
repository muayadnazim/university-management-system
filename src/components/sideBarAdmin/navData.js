
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
        title: 'Add Course',
        path: '/course',
        icon: FaIcons.FaReadme,
        className: 'nav-text'

    }
    , {
        title: 'Manage Course',
        path: '/ManageCourse',
        icon: FaIcons.FaReadme,
        className: 'nav-text'

    }
    , {
        title: 'Add Subject',
        path: '/AddSubject',
        icon: FaIcons.FaBook,
        className: 'nav-text'

    }, {
        title: 'Manage Subject',
        path: '/ManageSubject',
        icon: FaIcons.FaBook,
        className: 'nav-text'

    }
    , {
        title: 'Add Session',
        path: '/AddSession',
        icon: FaIcons.FaClock,
        className: 'nav-text'

    }
    ,
    {
        title: 'Manage Session',
        path: '/ManageSession',
        icon: FaIcons.FaClock,
        className: 'nav-text'

    }
    , {
        title: 'Add Staff',
        path: '/AddStaff',
        icon: FaIcons.FaUserPlus,
        className: 'nav-text'

    }, {
        title: 'Manage Staff',
        path: '/ManageStaff',
        icon: FaIcons.FaTh,
        className: 'nav-text'

    }
    , {
        title: 'Add Student',
        path: '/AddStudent',
        icon: FaIcons.FaUserPlus,
        className: 'nav-text'

    }, {
        title: 'Manage Student',
        path: '/ManageStudent',
        icon: FaIcons.FaTh,
        className: 'nav-text'

    }
    , {
        title: 'Notify Staff',
        path: '/NotifyStaff',
        icon: FaIcons.FaBullhorn,
        className: 'nav-text'

    }
    , {
        title: 'Notify Student',
        path: '/NotifyStudent',
        icon: FaIcons.FaBullhorn,
        className: 'nav-text'

    }
    , {
        title: 'View Attendance',
        path: '/ViewAttendance',
        icon: FaIcons.FaCalendarAlt,
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