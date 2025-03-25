import React from "react";
import "./styles/homemain.css";
import TestThumbnail from "./../TestThumbnail";

function HomeMain() {
  return (
    <div className="homemain-main-container">
      <div className="homemain-section1-upcoming-tests">
        <div className="homemain-section1-upcoming-tests-header">
          <div>Upcoming Tests</div>
          <div className="homemain-section1-view-all-button-container">
            <button className="home-main-sections-view-all-btn">
              View All
            </button>
          </div>
        </div>
        <div className="homemain-section1-upcoming-tests-flex">
          <TestThumbnail />
          <TestThumbnail />
        </div>
      </div>

      <div className="homemain-section2-all-tests">
        <div className="homemain-section2-all-tests-header">
          <div>All Tests</div>
          <div className="homemain-section2-view-all-button-container">
            <button className="home-main-sections-view-all-btn">View All</button>
          </div>
        </div>
        <div className="homemain-section2-all-tests-flex">
          <TestThumbnail />
          <TestThumbnail />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
