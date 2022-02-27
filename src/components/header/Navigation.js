import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="mainmenu__nav">
      <ul className="mainmenu">
        <li >
          <Link to={process.env.PUBLIC_URL + "/"}>
            Home
          </Link>
        </li>
        <li >
          <Link to={process.env.PUBLIC_URL + "/service"}>
            Service
          </Link>

        </li>
        <li >
          <Link to={process.env.PUBLIC_URL + "/blog"}>
            News
          </Link>

        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "#/"}>
            Bitcoin <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            
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
      </ul>
    </nav>
  );
};

export default Navigation;
