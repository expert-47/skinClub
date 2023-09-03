import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <button className="sidebar-toggle">Toggle</button>
      </div>
      <div className="brand">
        <h1>SKINCLUB</h1>
        <span>COSMETIC DOCTORS</span>
      </div>
      <div className="right">
        <div className="notification-bell">
          <i className="fas fa-bell"></i>{" "}
        </div>
        <div className="user-profile">
          <img src="avatar-image-url.jpg" alt="User Avatar" />
          <span className="user-name">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
