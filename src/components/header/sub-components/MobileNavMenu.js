import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvasNavigation" id="offcanvas-navigation">
      <ul>
        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>

        </li>

        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/service"}>Service</Link>

        </li>

        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/blog"}>News</Link>

        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link>
        </li>
        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "#/"}>Bitcoin</Link>
          <ul className="subMenu">
            
            <li>
              <Link to={process.env.PUBLIC_URL + "/about-bitcoin"}>
                About Bitcoin
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/merchants"}>Merchants</Link>
            </li>
            
            <li>
              <Link to={process.env.PUBLIC_URL + "/wallet"}>Wallet Page</Link>
            </li>
            
            
          </ul>
        </li>
        <li>
              <Link to={process.env.PUBLIC_URL + "/team"}>Our Team</Link>
            </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
        <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Login / Register
              </Link>
            </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
