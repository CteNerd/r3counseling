import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Menu } from "antd";
import Home from "./pages/home";
import About from "./pages/about";
import Terms from "./pages/terms";
import Offerings from "./pages/offerings";
import ReadyToRelease from "./pages/ready-to-release";
import AppointmentRequest from "./pages/appointment-request";
import {
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

const BASE_URL = "https://r3counseling.com";
const DEFAULT_SOCIAL_IMAGE =
  "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/R3+Counseling+Logo+-+Final-05.jpeg";

type RouteSeoConfig = {
  title: string;
  description: string;
};

const ROUTE_SEO: Record<string, RouteSeoConfig> = {
  "/": {
    title: "Release Restore Redefine Counseling | Martinez, GA",
    description:
      "Holistic counseling services in Martinez, Georgia, including EMDR intensives, trauma-focused therapy, wellness offerings, and restorative retreats.",
  },
  "/about": {
    title: "About | Release Restore Redefine Counseling",
    description:
      "Meet the Release Restore Redefine Counseling team and learn about our trauma-informed, culturally responsive care approach.",
  },
  "/offerings": {
    title: "Offerings | Release Restore Redefine Counseling",
    description:
      "Explore EMDR intensives, private wellness experiences, clinical consultation, groups, and individual therapy services.",
  },
  "/events": {
    title: "Events | Release Restore Redefine Counseling",
    description:
      "Discover upcoming support groups, wellness gatherings, and community events hosted by Release Restore Redefine Counseling.",
  },
  "/contact": {
    title: "Contact | Release Restore Redefine Counseling",
    description:
      "Contact Release Restore Redefine Counseling to request services, ask questions, and begin your healing journey.",
  },
  "/resources": {
    title: "Resources | Release Restore Redefine Counseling",
    description:
      "Access crisis lines, support resources, and mental health tools available in Georgia and nationwide.",
  },
  "/retreat": {
    title: "Retreats | Release Restore Redefine Counseling",
    description:
      "Learn about restorative retreat experiences designed to support rest, healing, and personal reconnection.",
  },
  "/ready-to-release": {
    title: "Ready To Release | Release Restore Redefine Counseling",
    description:
      "Join the Ready To Release community and stay connected with wellness updates, offerings, and support opportunities.",
  },
  "/appointment-request": {
    title: "Appointment Request | Release Restore Redefine Counseling",
    description:
      "Request an appointment with Release Restore Redefine Counseling for therapy, intensives, and wellness support.",
  },
};

function upsertMetaTag(
  selector: string,
  attributeName: "name" | "property",
  attributeValue: string,
  content: string
) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function resolveSeoForPath(pathname: string): RouteSeoConfig {
  if (pathname.startsWith("/retreat")) {
    return ROUTE_SEO["/retreat"];
  }

  return ROUTE_SEO[pathname] || ROUTE_SEO["/"];
}

function RouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname || "/";
    const seo = resolveSeoForPath(currentPath);
    const canonicalUrl = `${BASE_URL}${currentPath === "/" ? "/" : currentPath}`;

    document.title = seo.title;

    const canonicalLink =
      (document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null) ||
      document.createElement("link");

    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", canonicalUrl);

    if (!canonicalLink.parentNode) {
      document.head.appendChild(canonicalLink);
    }

    upsertMetaTag("meta[name=\"description\"]", "name", "description", seo.description);
    upsertMetaTag("meta[property=\"og:type\"]", "property", "og:type", "website");
    upsertMetaTag("meta[property=\"og:title\"]", "property", "og:title", seo.title);
    upsertMetaTag(
      "meta[property=\"og:description\"]",
      "property",
      "og:description",
      seo.description
    );
    upsertMetaTag("meta[property=\"og:url\"]", "property", "og:url", canonicalUrl);
    upsertMetaTag(
      "meta[property=\"og:image\"]",
      "property",
      "og:image",
      DEFAULT_SOCIAL_IMAGE
    );
    upsertMetaTag("meta[name=\"twitter:card\"]", "name", "twitter:card", "summary_large_image");
    upsertMetaTag("meta[name=\"twitter:title\"]", "name", "twitter:title", seo.title);
    upsertMetaTag(
      "meta[name=\"twitter:description\"]",
      "name",
      "twitter:description",
      seo.description
    );
    upsertMetaTag(
      "meta[name=\"twitter:image\"]",
      "name",
      "twitter:image",
      DEFAULT_SOCIAL_IMAGE
    );

    const routeSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: seo.title,
      description: seo.description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Release Restore Redefine Counseling",
        url: BASE_URL,
      },
    };

    const schemaId = "route-page-schema";
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = schemaId;
      document.head.appendChild(schemaScript);
    }

    schemaScript.text = JSON.stringify(routeSchema);
  }, [location.pathname]);

  return null;
}

function App() {
  const [selectedMenuKey, setSelectedMenuKey] = useState("");
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 1279px)").matches
  );

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
    const mediaQuery = window.matchMedia("(max-width: 1279px)");

    const handleMatchChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMatchChange);

      return () => {
        mediaQuery.removeEventListener("change", handleMatchChange);
      };
    }

    mediaQuery.addListener(handleMatchChange);

    return () => {
      mediaQuery.removeListener(handleMatchChange);
    };
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
            alt="R3 Counseling logo"
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
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="img">
            <img
              className="menu-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/R3+Counseling+Logo+-+Final-01-Transparentv2.png"
              alt="R3 Counseling Logo - Release Restore Redefine"
            />
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
      <RouteMetadata />
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
