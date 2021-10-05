import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Group,
  Storefront,
  AttachMoney,
  BarChart,
  Email,
  DynamicFeed,
  Message,
  Work,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon " /> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/users">
                <Group className="sidebarIcon" /> Users
              </Link>
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" /> Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" /> Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" /> mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Work className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
