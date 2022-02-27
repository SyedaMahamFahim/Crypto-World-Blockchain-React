import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AboutContent from "../components/about-contents/AboutContent";
import AboutContentTwo from "../components/about-contents/AboutContentTwo";
import VideoPopup from "../components/video-popups/VideoPopup";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>About Us</title>
        <meta
          name="About Us"
          content="About Us"
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="About Us" />
        {/* about content */}
        <AboutContent />
        {/* video popup */}
        <VideoPopup />
        {/* about content two */}
        <AboutContentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default About;
