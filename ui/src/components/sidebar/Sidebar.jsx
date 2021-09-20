import React from 'react'
import "./Sidebar.css"
import {LineStyle,Timeline,TrendingUp,Group ,Storefront,AttachMoney,BarChart,
    Email,DynamicFeed,Message,Work,Report }
 from '@mui/icons-material';
function Sidebar() {
    return (
       <div className="sidebar">
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">DashBoard</h3>
                   <ul className="sidebarList">
                       <li className="sidebarItem">
                            <LineStyle  className="sidebarIcon"/> Home
                       </li>
                       <li className="sidebarItem">
                            <Timeline  className="sidebarIcon"/> Analytics
                       </li>
                       <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon" /> Sales
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                       <li className="sidebarItem">
                            <Group  className="sidebarIcon"/> Users
                       </li>
                       <li className="sidebarItem">
                            <Storefront  className="sidebarIcon"/> Products
                       </li>
                       <li className="sidebarItem">
                            <AttachMoney className="sidebarIcon" /> Transactions
                       </li>
                       <li className="sidebarItem">
                            <BarChart className="sidebarIcon" /> Transactions
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notifications</h3>
                   <ul className="sidebarList">
                       <li className="sidebarItem">
                            <Email  className="sidebarIcon"/> mail
                       </li>
                       <li className="sidebarItem">
                            <DynamicFeed  className="sidebarIcon"/> Feedback
                       </li>
                       <li className="sidebarItem">
                            <Message className="sidebarIcon" /> Messages
                       </li>
                     
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff</h3>
                   <ul className="sidebarList">
                       <li className="sidebarItem">
                            <Work  className="sidebarIcon"/> Manage
                       </li>
                       <li className="sidebarItem">
                            <Timeline  className="sidebarIcon"/> Analytics
                       </li>
                       <li className="sidebarItem">
                            <Report className="sidebarIcon" /> Reports
                       </li>
                     
                   </ul>
               </div>
           </div>
       </div>

    )
}

export default Sidebar
