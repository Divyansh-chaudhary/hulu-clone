import React from "react";
import {
  IoAlbumsOutline,
  IoFlashOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoTvOutline,
  IoGridOutline,
} from "react-icons/io5";

function Navbar() {
  return (
    <nav>
      <div className="icons">
        <IoAlbumsOutline className="nav-icon" />
        <IoFlashOutline className="nav-icon" />
        <IoTvOutline className="nav-icon" />
        <IoSearchOutline className="nav-icon" />
        <IoPersonOutline className="nav-icon" />
        <IoGridOutline className="nav-icon" />
      </div>
      <div className="logo">hulu</div>
    </nav>
  );
}

export default Navbar;
