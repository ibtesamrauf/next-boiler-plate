/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={2}>
              <h3>Our SIA Courses</h3>
              <ul>
                <li><a href="/door-supervisor/">Door Supervisor</a></li>
                <li><a href="/cctv-training/">Cctv Operator</a></li>
                <li><a href="/security-guard-training/">Security Guard</a></li>
                <li><a href="/close-protection/">Close Protection</a></li>
                <li><a href="/personal-licence-training/">Personal License</a></li>
                <li><a href="/first-aid-training/">First AID </a></li>
              </ul>
            </Col>
            <Col lg={2}>
              <h3>Locations</h3>
              <ul>
                <li><a href="/birmingham/">SIA training in Birmingham</a></li>
                <li><a href="/brighton/">SIA training in Brighton</a></li>
                <li><a href="/bristol/">SIA training in Bristol</a></li>
                <li><a href="/leeds/">SIA training in Leeds</a></li>
                <li><a href="/manchester/">SIA training in Manchester</a></li>
              </ul>
            </Col>
            <Col lg={2}>
              <h3>Site links</h3>
              <ul>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/refund-policy/">Refund Policy</a></li>

              </ul>
            </Col>
            <Col lg={3}>
              <h3>Help and Support</h3>
              <ul>
                <li><a href="/about-us/">About Us</a></li>
                <li><a href="/contact-us/">Contact Us</a></li>
              </ul>
            </Col>
            <Col lg={3}>
              <h3>Get in touch</h3>
              <div className="contact-info">
                <span><img src="images/footer-phone-icon.svg" /> 01355 377 108 </span>
                <span><img src="images/footer-email-icon.svg" /> <a href="mailto:info@traininghub.co.uk">info@traininghub.co.uk</a></span>
                <span><img src="images/footer-lock-icon.svg" /> <a href="#">Secure online payment</a></span>
                <br />
              </div>
              <div className="payment-footer">
                <img src="images/footer-card-new.jpg" alt="Creadit Card" />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

    </>
  );
}

export default DefaultFooter;
