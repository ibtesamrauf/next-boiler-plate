// doc Link
// https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar

import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";

// sections for this page
import Images from "../components/index-sections/Images.js";
import BasicElements from "../components/index-sections/BasicElements.js";
import Navbars from "../components/index-sections/Navbars.js";
import Tabs from "../components/index-sections/Tabs.js";
import Pagination from "../components/index-sections/Pagination.js";
import Notifications from "../components/index-sections/Notifications.js";
import Typography from "../components/index-sections/Typography.js";
import Javascript from "../components/index-sections/Javascript.js";
import Carousel from "../components/index-sections/Carousel.js";
import NucleoIcons from "../components/index-sections/NucleoIcons.js";
import CompleteExamples from "../components/index-sections/CompleteExamples.js";
import SignUp from "../components/index-sections/SignUp.js";
import Examples from "../components/index-sections/Examples.js";

function Docs() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Docs;
