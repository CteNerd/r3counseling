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
import SideNav from "./components/sideNav/sideNav";
import Resources from "./pages/resources";
import Retreat from "./pages/retreat";
import Events from "./pages/events";
import Contact from "./pages/contact";
import StillAwayRetreat from "./pages/retreat/still-away";
import PauseRetreat from "./pages/retreat/pause";

function App() {
  const [selectedMenuKey, setSelectedMenuKey] = useState("");
  const breakpoint = window.matchMedia("(max-width: 1279px)");
  const [isMobile, setIsMobile] = useState(false);

  // Add site-wide schema markup
  useEffect(() => {
    // Create breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://r3counseling.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://r3counseling.com/about",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Offerings",
          "item": "https://r3counseling.com/offerings",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Events",
          "item": "https://r3counseling.com/events",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://r3counseling.com/contact",
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Ready to Release",
          "item": "https://r3counseling.com/ready-to-release",
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Retreats",
          "item": "https://r3counseling.com/retreat",
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Resources",
          "item": "https://r3counseling.com/resources",
        },
      ],
    };

    // Create the script element for breadcrumbs
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Clean up
    return () => {
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  useEffect(() => {
    setIsMobile(breakpoint.matches);
  }, []);

  function handleMenuClick(key: string) {
    setSelectedMenuKey(key);
  }

  /* Set the width of the side navigation to 250px */
  function openNav() {
    console.log("opening");
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav")!.style.width = "100%";
    }
  }

  function Navigation() {
    if (isMobile) {
      return (
        <div>
          <img
            className="menu-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/R3+Counseling+Logo+-+Final-01-Transparentv2.png"
          />
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
            <Link className="menu-item" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="offerings">
            <Link to="/offerings">Offerings</Link>
          </Menu.Item>
          <Menu.Item key="events">
            <Link to="/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="img">
            <img
              className="menu-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/R3+Counseling+Logo+-+Final-01-Transparentv2.png"
              alt="R3 Counseling Logo - Release Restore Redefine"
            />
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="ready-to-release">
            <Link to="/ready-to-release">Ready to Release</Link>
          </Menu.Item>
          <Menu.Item key="terms">
            <Link to="/terms">Terms</Link>
          </Menu.Item>
          <Menu.Item key="retreat">
            <Link to="/retreat">Retreat</Link>
          </Menu.Item>
          <Menu.Item key="resources">
            <Link to="/resources">Resources</Link>
          </Menu.Item>
        </Menu>
      );
    }
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <SideNav />
        <header className="App-header">
          <div>
            <Navigation />
          </div>
        </header>
        <div className="App-body">
          <div className="App-body-container">
            {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route path="/resources">
                <Resources isMobile={isMobile} />
              </Route>
              <Route path="/offerings">
                <Offerings isMobile={isMobile} />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/ready-to-release">
                <ReadyToRelease />
              </Route>
              <Route path="/appointment-request">
                <AppointmentRequest />
              </Route>
              <Route path="/retreat/pause">
                <PauseRetreat />
              </Route>
              <Route path="/retreat/still-away">
                <StillAwayRetreat />
              </Route>
              <Route path="/retreat">
                <Retreat />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        <footer className="App-footer" role="contentinfo" aria-label="Contact information">
          <div>
            <div className="footer-link-container" itemScope itemType="http://schema.org/LocalBusiness">
              <span className="visually-hidden" itemProp="name">Release Restore Redefine Counseling</span>
              <a
                className="footer-link"
                href="https://www.google.com/maps/place/4210+Columbia+Rd,+Augusta,+GA+30907/@33.5060819,-82.1193749,17z/data=!3m1!4b1!4m5!3m4!1s0x88f9d370a85e0bed:0xedc6d4adfbf9f6be!8m2!3d33.5060819!4d-82.1171862"
                itemProp="address" itemScope itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">4210 Columbia Rd</span> | <span itemProp="addressLocality">Martinez</span>, <span itemProp="addressRegion">GA</span> <span itemProp="postalCode">30907</span>
              </a>
            </div>
            <div className="footer-link-container">
              <a className="footer-link" href="tel:1-706-750-8906" itemProp="telephone">
                PHONE: (706) 750-8906
              </a>
            </div>
            <div className="footer-link-container">
              <a
                className="footer-link"
                href="mailto:R3counseling@counselingsecure.com"
                itemProp="email"
              >
                EMAIL US
              </a>
            </div>
            <div className="footer-link-container" itemScope itemType="http://schema.org/Organization">
              <a
                className="footer-link"
                href="https://www.linkedin.com/in/tiffany-luke-lpc-cpcs-certified-emdr-holistic-therapist-29683119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                itemProp="sameAs"
                aria-label="LinkedIn profile"
              >
                <LinkedinOutlined />
              </a>
              <a
                className="footer-link"
                href="https://www.instagram.com/r3counseling"
                itemProp="sameAs"
                aria-label="Instagram profile"
              >
                <InstagramOutlined />
              </a>
              <a
                className="footer-link"
                href="https://goo.gl/maps/vE8KskCmY6pJJwZp8"
                itemProp="sameAs"
                aria-label="Google Maps location"
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
