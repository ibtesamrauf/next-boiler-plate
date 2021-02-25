// doc Link
// https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar

import React from "react";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";

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
import SignUp from "../components/index-sections/SignUp.js";


// for redux
import { getCoursesData } from "../redux/actions/main"
import { connect } from "react-redux"

import { toast } from 'react-toastify';

function Docs(props) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    props.getCoursesData();
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const { postcode } = props;
  console.log(postcode);
  toast("Wow so easy docs!");

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          {/* <Images /> */}
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <SignUp />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  postcode: state.form.userData.postcode,
})

const mapDispatchToProps = {
  getCoursesData: getCoursesData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Docs)

