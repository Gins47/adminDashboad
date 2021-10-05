import React from "react";
import "./User.css";
import { PersonOutlined, CalendarTodayOutlined, PhoneAndroidOutlined, MailOutlined, LocationOnOutlined } from "@mui/icons-material";
function User() {
  return (
    <div className="User">
      <div className="UserPageHeader">
        <h1 className="UserPageTitle">Edit User</h1>
        <button className="UserCreateBtn">Create</button>
      </div>
      <div className="UserWidgets">
        <div className="UserDetails">
          <div className="UserDescription">
            <img
              src="data:image/jpeg;base64,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"
              alt="John"
              className="UserImage"
            />
            <div className="UserDescriptionData">
              <span className="UserName">John</span>
              <span className="UserRole">Software Engineer</span>
            </div>
          </div>
          <div className="UserACDetails">
            <span className="UserTitle">Account Details</span>
            <ul className="UserPersonalDetails">
              <li className="UserAccountDetails">
                <PersonOutlined className="UserDetailsIcon" />
                <span className="UserDetailsData">John Abraham</span>
              </li>
              <li className="UserAccountDetails">
                <CalendarTodayOutlined className="UserDetailsIcon" />
                <span className="UserDetailsData">09-10-1993</span>
              </li>
            </ul>
          </div>
          <div className="UserACDetails">
            <span className="UserTitle">Contact Details</span>
            <ul className="UserPersonalDetails">
              <li className="UserAccountDetails">
                <PhoneAndroidOutlined className="UserDetailsIcon" />
                <span className="UserDetailsData">+1 123 456 789</span>
              </li>
              <li className="UserAccountDetails">
                <MailOutlined className="UserDetailsIcon" />
                <span className="UserDetailsData">john@gmail.com</span>
              </li>{" "}
              <li className="UserAccountDetails">
                <LocationOnOutlined className="UserDetailsIcon" />
                <span className="UserDetailsData">Porto | Portugal</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="UserEdit">
          <span className="UserEditTitle">Edit</span>
        </div>
      </div>
    </div>
  );
}

export default User;
