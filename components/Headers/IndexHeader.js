/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Form, Input, Button, InputGroupAddon, InputGroup } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/main-slider.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="slider-text-inner">
            <h1>Start a new career, today</h1>

            <Form id="search_form" action="trainees/search_location.php" method="post">
              <div className="slider-search">
                <div className="location-icon sharelocation" id="sharelocation"></div>

                <InputGroup>
                  <Input placeholder="Enter your postcode or town name" type="text" id="CoursesZipcode" bsSize="lg" name="loc_name"></Input>
                  <InputGroupAddon addonType="append">
                    <Button className="my-0 px-4" color="warning" size="lg"> Search </Button>
                  </InputGroupAddon>
                </InputGroup>

                <div className="location_loader d-none"></div>
              </div>
            </Form>

            <h2 className="mt-5">Change your career today, with one our approved training providers</h2>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
