import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faHome, faUserDoctor, faHospital, faUserFriends,  faBookMedical, faMoneyCheck, faAdd, faBed, faUser, faList, faPlus} from '@fortawesome/free-solid-svg-icons'
//import CIcon from '@coreui/icons-react'
// import {LocalHospitalIcon} from '@mui/icons-material/LocalHospital';
/*import {
  cilHome,
  cibPaypal,
  cilHospital,
  cilStar,
} from '@coreui/icons'*/
//import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem ,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <FontAwesomeIcon color='bluelight' icon={faHome}  style={{margin: "10px"}}/>,
    
    //icon:  'fa-solid fa-house',
    //icon: <LocalHospitalIcon />,

   /* badge: {
      color: 'info',
      text: 'NEW',
    },*/
  },

  {
    component: CNavGroup,
    name: 'Doctor',
    to: '/Doctor',
    icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}} />,
    
    items: [
      {
        component: CNavItem,
        name: 'All Doctor',
        to: '/Doctor/All Doctor',
        icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}}/>,
      },
      
      {
        component: CNavItem,
        name: 'Add Doctor',
        to: '/Doctor/Add Doctor',
        icon: <FontAwesomeIcon icon={faAdd} style={{margin: "10px"}}/>,
      },
      {
        component: CNavItem,
        name: "",
        to: '/Doctor Profile',
        
      },
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Hospital',
    to: '/Hospital',
    icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}} />,
    
    items: [
      {
        component: CNavItem,
        name: 'HospitalAdd',
        to: '/Hospital/HospitalAdd',
        icon: <FontAwesomeIcon icon={faUser} style={{margin: "10px"}}/>,
      },
      
      {
        component: CNavItem,
        name: 'HospitalList',
        to: '/Hospital/HospitalList',
        icon: <FontAwesomeIcon icon={faList} style={{margin: "10px"}}/>,
      },
       
    ],
  },
  {
    component: CNavGroup,
    name: 'User',
    to: '/UserList',
    icon: <FontAwesomeIcon icon={faUser} style={{margin: "10px"}} />,
    
    items: [
      {
        component: CNavItem,
        name: 'UserList',
        to: '/UserList/UserList',
        icon: <FontAwesomeIcon icon={faList} style={{margin: "10px"}}/>,
      }  
    ],
  },
  {
    component: CNavGroup,
    name: 'Bookings',
    to: '/Bookings',
    icon: <FontAwesomeIcon icon={faUser} style={{margin: "10px"}} />,
    
    items: [
      {
        component: CNavItem,
        name: 'Bookings',
        to: '/Bookings/Bookings',
        icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}}/>,
      }
    ],
  },
  /*{
    component: CNavGroup,
    name: 'Department',
    to: '/Department',
    icon: <FontAwesomeIcon icon={faHospital} style={{margin: "10px"}}/>,
    items: [
      {
        component: CNavItem,
        name: 'All Department',
        to: '/Department/All Department',
        icon: <FontAwesomeIcon icon={faHospital} style={{margin: "10px"}}/>,
      },
      {
        component: CNavItem,
        name: 'Add Department',
        to: '/Department/Add Department',
        icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
      },
     
    ],
  },*/
  /*{
    component: CNavGroup,
    name: 'Appointment',
    to: '/Appointment',
    
    icon: <FontAwesomeIcon icon={faUserDoctor}style={{margin: "10px"}} />,
    items: [
      {
        component: CNavItem,
        name: 'Doctor schedule',
        to: '/Appointment/Doctor schedule',
        icon: <FontAwesomeIcon icon={faUserDoctor}style={{margin: "10px"}}/>,
      },
      {
        component: CNavItem,
        name: 'Add schedule',
        to: '/Appointment/Add schedule',
        icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
      },
     
    ],
  },*/
 /* {
    component: CNavGroup,
    name: 'Patient',
    to: '/Patient',
    icon: <FontAwesomeIcon icon={faUserFriends}style={{margin: "10px"}} />,
    // icon: <LocalHospitalIcon />,
    items: [
      {
        component: CNavItem,
        name: 'Add patient',
        to: '/Patient/Add patient',
        icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
      },
      {
        component: CNavItem,
        name: 'All patient',
        to: '/Patient/All patient',
        icon: <FontAwesomeIcon icon={faUserFriends}style={{margin: "10px"}} />,
        
      },
     
    ],
  },*/
  {
    component: CNavGroup,
    name: 'Bed Menu',
    to: '/Bed Booking',
    icon: <FontAwesomeIcon icon={faBookMedical} style={{margin: "10px"}}/>,
    // icon: <LocalHospitalIcon />,
    items: [
      /*{
        component: CNavItem,
        name: 'All bed',
        to: '/Bed Booking/All bed',
        icon: <FontAwesomeIcon icon={faBookMedical} style={{margin: "10px"}}/>,
      },*/
      
      {
        component: CNavItem,
        name: 'Bed Expense',
        to: '/Bed Booking/Bed Expense',
        icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}}/>,
      },
      {
        component: CNavItem,
        name: 'Add Bed facility',
        to: '/Bed Booking/Add Bed facility',
        icon: <FontAwesomeIcon icon={faBed}style={{margin: "10px"}}/>,
      },
      {
        component: CNavItem,
        name: 'Add Amenities',
        to: '/Bed Booking/Add Amenities',
        icon: <FontAwesomeIcon icon={faBed}style={{margin: "10px"}}/>,
      },
      {
        component: CNavItem,
        name: 'Add Services',
        to: '/Bed Booking/Add Services',
        icon: <FontAwesomeIcon icon={faBed}style={{margin: "10px"}}/>,
      },
      
    ],
  },

  {
    component: CNavGroup,
    name: 'Bed Bookings',
    to: '/Bed Bookings',
    icon: <FontAwesomeIcon icon={faBookMedical} style={{margin: "10px"}}/>,
    items: [
      {
        component: CNavItem,
        name: 'Running Booking',
        to: '/Bed Bookings/Running Booking',
        icon: <FontAwesomeIcon icon={faBed}style={{margin: "10px"}}/>,
      }, 
      {
        component: CNavItem,
        name: 'Closed Booking',
        to: '/Bed Bookings/Closed Booking',
        icon: <FontAwesomeIcon icon={faBed}style={{margin: "10px"}}/>,
      },
      {
        component: CNavItem,
        name: 'Bed Billing',
        to: '/Bed Bookings/Bed Billing',
        icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}}/>,
      }, 
      
    ],
  },
  /*{
    component: CNavGroup,
    name: 'Payments',
    to: '/Payments',
    icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
    items: [
      {
        component: CNavItem,
        name: 'Payment',
        to: '/Payments/Payment',
        icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
      },
      {
        component: CNavItem,
        name: 'Add payment',
        to: '/Payments/Add payment',
        icon: <FontAwesomeIcon icon={faAdd}style={{margin: "10px"}} />,
      },
    ],
  },*/
  {
    component: CNavGroup,
    name: 'Manage SubAdmin',
    to: '/Manage User',
    icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
    items: [
      {
        component: CNavItem,
        name: 'Add SubAdmin',
        to: '/Manage User/Add User',
        icon: <FontAwesomeIcon icon={faUser}style={{margin: "10px"}} />,
      },
      {
        component: CNavItem,
        name: 'SubAdmin List',
        to: '/Manage User/SubAdmin List',
        icon: <FontAwesomeIcon icon={faList}style={{margin: "10px"}} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'ManageHospital Admin',
    to: '/HospitalSubAdmin',
    icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
    items: [
      {
        component: CNavItem,
        name: 'AddHospital Admin',
        to: '/HospitalSubAdmin/AddHospital SubAdmin',
        icon: <FontAwesomeIcon icon={faUser}style={{margin: "10px"}} />,
      },
      {
        component: CNavItem,
        name: ' Hospital Admin List',
        to: '/HospitalSubAdmin/HospitalSubAdmin List',
        icon: <FontAwesomeIcon icon={faList}style={{margin: "10px"}} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: ' Manage  HospitalSubAdmin',
    to: '/Manage HospitalSubAdmin',
    icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
    items: [
      {
        component: CNavItem,
        name: 'Manage HospitalAdmin',
        to: '/Manage HospitalSubAdmin/Manage HospitalAdmin',
        icon: <FontAwesomeIcon icon={faUser}style={{margin: "10px"}} />,
      },
      {
        component: CNavItem,
        name: 'Hospital SubAdmin List',
        to: '/Manage HospitalSubAdmin/HospitalSubAdmin List',
        icon: <FontAwesomeIcon icon={faList}style={{margin: "10px"}} />,
      },
    ],
  },
  
]
       
      
export default _nav
