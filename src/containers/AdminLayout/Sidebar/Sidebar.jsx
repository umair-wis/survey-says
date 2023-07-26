import React from "react";
import logo from "../../../assets/images/logo.svg"
import "./sidebar.scss"

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      <section id="sidebar">
        <div className="logo_blk">
          <img src={logo} alt="logo" />
        </div>

        <ul className="list_item">
          <li>Form Data</li>
        </ul>

        <ul className="new-item">
          <li className="new-item-li" onClick={handleLogout}>Sign Out</li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
