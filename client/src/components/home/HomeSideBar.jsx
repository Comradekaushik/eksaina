import React from "react";
import { Link } from "react-router-dom";
import "./styles/homesidebar.css";
import stacksvg from "../../assets/images/stack-svgrepo-com.svg";
import piechart from "../../assets/images/pie-chart-piechart-stats-analytics-svgrepo-com.svg";
import supporticon from "../../assets/images/support-svgrepo-com.svg";
import homeicon from "../../assets/images/home-1-svgrepo-com.svg";
import settingsicon from "../../assets/images/settings-svgrepo-com.svg";
import notificationicon from "../../assets/images/notification.svg";
import adminicon from "../../assets/images/administrator-svgrepo-com.svg";

export default function HomeSideBar() {
  return (
    <div className="home-sidebar-main-container">
      <Link to="/home" className="home-sidebar-logo-link">
        <div className="home-sidebar-logo">EKSAINA</div>
      </Link>

      <div className="sidebar-menu-items-container">
        <Link to="/home" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={homeicon} alt="icon" />
            Dashboard
          </div>
        </Link>

        <Link to="/exams" className="sidebar-menu-item-link">
          {" "}
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={stacksvg} alt="icon" />
            Exams
          </div>
        </Link>
        <Link to="/reports" className="sidebar-menu-item-link">
          {" "}
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={piechart} alt="icon" />
            Reports
          </div>
        </Link>
        <Link to="/admin" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={adminicon} alt="icon" />
            Admin
          </div>
        </Link>
        <Link to="/support" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={supporticon} alt="icon" />
            Support
          </div>
        </Link>
        <Link to="/notifications" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img
              className="sidebar-menu-icons-svg-imgs"
              src={notificationicon}
              alt="icon"
            />
            Notifications
          </div>
        </Link>
        <Link to="/settings" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={settingsicon} alt="icon" />
            Settings
          </div>
        </Link>
      </div>

      <div className="bottom-section-sidebar">
        <Link to="/profile" className="myprofile-container-link">
          <div className="myprofile-container">
            <div className="myprofile-img-container">
              <img
                className="sidebar-profile-image"
                src={require("../../assets/images/grave-soviet-dictator-josef-stalin-red-square-moscow-russia_769373-4636.jpg")}
                alt="not-found"
              />
            </div>
            <div className="sidebar-myprofile-info">
              <div className="sidebar-profile-name-container">
                {/*myprofile-name*/}
                {localStorage.getItem("name") || "My name"}
              </div>
              <div className="sidebar-profile-email-container">
                {/*myprofile-email */}

                {localStorage.getItem("email") || "nonamek448.be34@email.com"}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
