import React, { useEffect, useState } from "react";
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
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/offerings">Offerings</a>
      <a href="/events">Events</a>
      <a href="/ready-to-release">Ready to Release</a>
      <a href="/terms">Terms</a>
      <a href="/retreat">Retreat</a>
      <a href="/resources">Resources</a>
    </div>
  );
}
