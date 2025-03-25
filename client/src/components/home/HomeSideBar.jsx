import React from "react";
import { Link } from "react-router-dom";
import "./styles/homesidebar.css";
import stacksvg from "../../assets/images/stack-svgrepo-com.svg";
import piechart from "../../assets/images/pie-chart-piechart-stats-analytics-svgrepo-com.svg";
import supporticon from "../../assets/images/support-svgrepo-com.svg";
import homeicon from "../../assets/images/home-1-svgrepo-com.svg";
import settingsicon from "../../assets/images/settings-svgrepo-com.svg";
import notificationicon from "../../assets/images/notification.svg";

export default function HomeSideBar(props) {
  return (
    <div className="home-sidebar-main-container">
      <Link to="/home" className="home-sidebar-logo-link">
        <div className="home-sidebar-logo">EKSAINA</div>
      </Link>

      <div className="sidebar-menu-items-container">
        <Link to="/home" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={homeicon} />
            Dashboard
          </div>
        </Link>

        <Link to="/exams" className="sidebar-menu-item-link">
          {" "}
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={stacksvg} />
            Exams
          </div>
        </Link>
        <Link to="/reports" className="sidebar-menu-item-link">
          {" "}
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={piechart} />
            Reports
          </div>
        </Link>
        <Link to="/support" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={supporticon} />
            Support
          </div>
        </Link>
        <Link to="/notifications" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img
              className="sidebar-menu-icons-svg-imgs"
              src={notificationicon}
            />
            Notifications
          </div>
        </Link>
        <Link to="/settings" className="sidebar-menu-item-link">
          <div className="sidebar-menu-item">
            <img className="sidebar-menu-icons-svg-imgs" src={settingsicon} />
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
              />
            </div>
            <div className="sidebar-myprofile-info">
              <div className="sidebar-profile-name-container">
                {/*myprofile-name*/}
                {props.name || "My name"}
              </div>
              <div className="sidebar-profile-email-container">
                {/*myprofile-email */}

                {props.email || "nonamek448.be34@email.com"}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
