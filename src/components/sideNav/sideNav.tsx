import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  MailOutlined,
  LogoutOutlined,
  CaretDownOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  CarryOutOutlined,
  PlusSquareOutlined,
  BarsOutlined,
  SafetyOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
  UserOutlined,
  BookOutlined,
  StarOutlined,
  PieChartOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import "./sideNav.css";

export default function SideNav() {
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [showTicketDropdown, setShowTicketDropdown] = useState(false);
  const [isTixHolder, setIsTixHolder] = useState(true);
  const [canAddUsers, setCanAddUsers] = useState(false);
  const [canAddEvents, setCanAddEvents] = useState(false);
  const [canViewEventDetails, setCanViewEventDetails] = useState(false);
  const [isMemberOfOrg, setIsMemberOfOrg] = useState(false);

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
      <Link to="/ready-to-release" onClick={closeNav}>Ready to Release</Link>
      <Link to="/terms" onClick={closeNav}>Terms</Link>
      <Link to="/retreat" onClick={closeNav}>Retreat</Link>
      <Link to="/resources" onClick={closeNav}>Resources</Link>
    </div>
  );
}
