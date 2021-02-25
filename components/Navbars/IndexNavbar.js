import React from "react";
import Link from 'next/link';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {

  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <div className="top-blue-bar">
        <div className="container">
          <div className="top-blue-bar-inner text-left pull-left"><span>
            <i className="fa fa-phone" aria-hidden="true"></i> 01355 377 108</span>
            <span><i className="fa fa-envelope" aria-hidden="true"></i>
              <a href="mailto:info@traininghub.co.uk">info@traininghub.co.uk</a></span>
          </div>
        </div>
      </div>

      <Navbar className="navbar-light bg-white mb-md-0" expand="lg">
        <Container>
          <div className="navbar-translate">
            <Link href="/">
              <NavbarBrand
                href="/"
                id="navbar-brand"
              >
                <img src="/images/Training_Hub_Logo_RGB.svg" width="280px" alt="Training Hub Logo" />
              </NavbarBrand>
            </Link>
            <button
              className="navbar-toggler navbar-toggler border-none"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>COURSES</p>
                </DropdownToggle>
                <DropdownMenu>

                  <DropdownItem to="/index">
                    All Courses
                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >
                    Door Supervisor
                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >
                    CCTV Operator
                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >
                    Security Guard

                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >

                    Close Protection

                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >

                    Personal Licence

                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >

                    First Aid

                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >

                    LEVEL 3 EDUCATION AND TRAINING

                  </DropdownItem>

                  <DropdownItem
                    href="https://www.google.com"
                    target="_blank"
                  >

                    PHYSICAL INTERVENTION TRAINING
                  </DropdownItem>



                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <p>LOCATIONS</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <p>ABOUT US</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <p>CONTACT</p>
                </NavLink>
              </NavItem>


            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;