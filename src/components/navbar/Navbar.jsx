import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import hamBtn from "../../assets/ham.svg";
import { MdOutlineChair } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/* Navbar Default */}
      <div className="navbar-container container-fluid">
        <nav className="container nav-bar">
          <div className="logo">CIDFEE</div>
          <div className="navlinks">
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
          </div>
          <button><MdOutlineChair />   Reservasi</button>
          <img src={hamBtn} alt="" onClick={handleToggle} />
        </nav>
      </div>
      {/* Navbar Mobile Toggle */}
      <div className={`${isOpen ? "open" : "closed"}`} id="menulist">
        <a href="">Home</a>
        <a href="">Menu</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <button><MdOutlineChair />   Reservasi</button>
      </div>
    </>
  );
};

export default Navbar;
