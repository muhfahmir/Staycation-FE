import Button from "elements/Button";
import React from "react";
import IconText from "./IconText";

import Fade from "react-reveal/Fade";

export default function Header(props) {
  // console.log(props);
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" type="link" href="">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </div>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <IconText />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="">
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse-by
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
