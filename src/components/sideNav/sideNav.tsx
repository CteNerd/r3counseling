import React from "react";
import { Link } from "react-router-dom";
import "./sideNav.css";

export default function SideNav() {
  function closeNav() {
    if (document.getElementById("mySidenav"))
      document.getElementById("mySidenav")!.style.width = "0";
  }

  return (
    <div id="mySidenav" className="sidenav">
      <div className="closebtn" onClick={closeNav}>
        &times;
      </div>
      <Link to="/" onClick={closeNav}>Home</Link>
      <Link to="/about" onClick={closeNav}>About</Link>
      <Link to="/offerings" onClick={closeNav}>Offerings</Link>
      <Link to="/events" onClick={closeNav}>Events</Link>
      <Link to="/contact" onClick={closeNav}>Contact</Link>
      <Link to="/ready-to-release" onClick={closeNav}>Ready to Release</Link>
      <Link to="/terms" onClick={closeNav}>Terms</Link>
      <Link to="/retreat" onClick={closeNav}>Retreat</Link>
      <Link to="/resources" onClick={closeNav}>Resources</Link>
    </div>
  );
}
