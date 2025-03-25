import React from "react";
import calendaricon from "../assets/images/calendar-date-svgrepo-com.svg";
import "./testthumbnail.css";


function TestThumbnail(props) {
  return (
    <div className="test-thumbnail-main-container">
      <div className=" test-thumbnail-image-container">
        <img
          src={
            props.imageurl ||
            require("../assets/images/grave-soviet-dictator-josef-stalin-red-square-moscow-russia_769373-4636.jpg")
          }
          alt="test-thumbnail"
          className="test-thumbnail-image"
        />
      </div>
      <div className=" test-thumbnail-title-container">
        {props.title ||
          "no title provided no title provided no title provided no title provided no title provided no title provided no title provided"}
      </div>
      <div className="test-thumbnail-date">
        <div className="test-thumbnail-calendar-icon-container"> 
          <img
            src={calendaricon}
            alt="calendar"
            className="test-thumbnail-calendar-icon"
          />
        </div>

        <div>{props.testtime || "23.02.2025"}</div>
      </div>
    </div>
  );
}

export default TestThumbnail;
