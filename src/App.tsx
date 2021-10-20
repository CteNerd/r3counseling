import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "antd";
import Home from "./pages/home";
import About from "./pages/about";
import Terms from "./pages/terms";
import ReadyToRelease from "./pages/ready-to-release";
import AppointmentRequest from "./pages/appointment-request";

function App() {
  const [selectedMenuKey, setSelectedMenuKey] = useState("");

  function handleMenuClick(key: string) {
    console.log(key);
    setSelectedMenuKey(key);
  }

  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header">
            <div>
              <Menu
                onClick={(e) => handleMenuClick(e.key)}
                selectedKeys={[selectedMenuKey]}
                mode="horizontal"
              >
                <Menu.Item key="home">
                  <a href="/">Home</a>
                </Menu.Item>
                <Menu.Item key="about">
                  <a href="/about">About Me</a>
                </Menu.Item>
                <Menu.Item key="offerings">
                  <a href="/offerings">Offerings</a>
                </Menu.Item>
                <Menu.Item key="contact">
                  <a href="/ready-to-release">Ready to Release</a>
                </Menu.Item>
                <Menu.Item key="terms">
                  <a href="/terms">Terms</a>
                </Menu.Item>
              </Menu>
            </div>
          </header>
          <body className="App-body">
            {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/terms">
                <Terms />
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
          </body>
          <footer>
            <div>
              <Menu mode="horizontal">
                <Menu.Item key="tel">
                  <a href="tel:1-786-755-1863">Call Us</a>
                </Menu.Item>
                <Menu.Item key="email">
                  <a href="mailto:reception+Tiffany970@growtherapy.com">
                    Email Reception
                  </a>
                </Menu.Item>
              </Menu>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
