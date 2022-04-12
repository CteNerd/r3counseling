import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Menu, Modal } from "antd";
import Home from "./pages/home";
import About from "./pages/about";
import Terms from "./pages/terms";
import Offerings from "./pages/offerings";
import ReadyToRelease from "./pages/ready-to-release";
import AppointmentRequest from "./pages/appointment-request";
import {
  FacebookOutlined,
  GiftOutlined,
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import SideNav from "./components/sideNav/sideNav"
import News from "./pages/news";

function App() {
  const [selectedMenuKey, setSelectedMenuKey] = useState("");
  const breakpoint = window.matchMedia("(max-width: 1279px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(breakpoint.matches);
  }, []);

  function handleMenuClick(key: string) {
    setSelectedMenuKey(key);
  }

  /* Set the width of the side navigation to 250px */
  function openNav() {
    console.log('opening');
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav")!.style.width = "100%";
    }
  }

  function Navigation() {
    if (isMobile) {
      return (
        <div>
          <img className="menu-img" src="https://wellcall-app-cdk.s3.amazonaws.com/R3+Counseling+Logo+-+Final-01-Transparentv2.png"/>
        <div className="menu-btn" onClick={() => openNav()}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        </div>
      );
    } else {
      return (
        <Menu
          onClick={(e) => handleMenuClick(e.key)}
          selectedKeys={[selectedMenuKey]}
          mode="horizontal"
          className="App-header-menu"
        >
          <Menu.Item key="home">
            <a className="menu-item" href="/">
              Home
            </a>
          </Menu.Item>
          <Menu.Item key="about">
            <a href="/about">About Me</a>
          </Menu.Item>
          <Menu.Item key="offerings">
            <a href="/offerings">Offerings</a>
          </Menu.Item>
        <Menu.Item key="img">
          <img className="menu-img" src="https://wellcall-app-cdk.s3.amazonaws.com/R3+Counseling+Logo+-+Final-01-Transparentv2.png"/>
        </Menu.Item>
          <Menu.Item key="contact">
            <a href="/ready-to-release">Ready to Release</a>
          </Menu.Item>
          <Menu.Item key="terms">
            <a href="/terms">Terms</a>
          </Menu.Item>
          <Menu.Item key="news">
            <a href="/news">News</a>
          </Menu.Item>
        </Menu>
      );
    }
  }

  return (
    <Router>
      <div className="App">
        <SideNav />
        <header className="App-header">
          <div>
            <Navigation />
          </div>
        </header>
        <body className="App-body">
          <div className="App-body-container">
            {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About isMobile={isMobile} />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route path="/news">
                <News isMobile={isMobile} />
              </Route>
              <Route path="/offerings">
                <Offerings isMobile={isMobile} />
              </Route>
              <Route path="/ready-to-release">
                <ReadyToRelease />
              </Route>
              <Route path="/appointment-request">
                <AppointmentRequest />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </body>
        <footer className="App-footer">
          <div>
            <div className="footer-link-container">
              <a
                className="footer-link"
                href="https://www.google.com/maps/place/4210+Columbia+Rd,+Augusta,+GA+30907/@33.5060819,-82.1193749,17z/data=!3m1!4b1!4m5!3m4!1s0x88f9d370a85e0bed:0xedc6d4adfbf9f6be!8m2!3d33.5060819!4d-82.1171862"
              >
                4210 Columbia Rd | Martinez, GA 30907
              </a>
            </div>
            <div className="footer-link-container">
              <a className="footer-link" href="tel:1-786-755-1863">
                PHONE: (786) 755-1863
              </a>
            </div>
            <div className="footer-link-container">
              <a
                className="footer-link"
                href="mailto:reception+Tiffany970@growtherapy.com"
              >
                EMAIL US
              </a>
            </div>
            <div className="footer-link-container">
              <a
                className="footer-link"
                href="https://www.linkedin.com/in/tiffany-luke-lpc-29683119"
              >
                <LinkedinOutlined />
              </a>
              <a
                className="footer-link"
                href="https://www.instagram.com/r3counseling"
              >
                <InstagramOutlined />
              </a>
              <a
                className="footer-link"
                href="https://goo.gl/maps/vE8KskCmY6pJJwZp8"
              >
                <GoogleOutlined />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
