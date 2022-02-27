import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image }) => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"} style={{
        color: "white",
        fontSize: "35px",
        fontWeight: 900,
      }}>
        Crypto World
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string
};

export default Logo;
