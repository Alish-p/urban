import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/slices/User";

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { _id, name, isAdmin } = useSelector((state) => state.user.userInfo);

  const handleLogut = () => {
    dispatch(logoutUser());
  };

  const handleSearch = () => {
    Navigate("/search");
  };

  const handleViewStudents = () => {
    Navigate("/all-students");
  };

  const handleExpire = () => {
    Navigate("/expire");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>UrbanRead</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* {_id && (
                <LinkContainer to={"/register"}>
                  <Nav.Link>
                    <i className="fa-solid fa-address-card" /> Register
                  </Nav.Link>
                </LinkContainer>
              )} */}

              {/* Register dropdown */}
              {_id && (
                <>
                  <NavDropdown title={"Register"} id="option-dropdown">
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/register");
                      }}
                    >
                      Full Day Register
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/half-day/register");
                      }}
                    >
                      Half Day Register
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/waiting-form");
                      }}
                    >
                      Pre Book
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}

              {/* Viewlist dropdown */}
              {_id && (
                <>
                  <NavDropdown title={"View"} id="option-dropdown">
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/all-students");
                      }}
                    >
                      View FullDay List
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/half-day/list");
                      }}
                    >
                      View HalfDay List
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/waiting-list");
                      }}
                    >
                      View Waiting List
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={handleExpire}>
                      View Expire List
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}

              {/* functionality dropdown */}
              {_id && (
                <>
                  <NavDropdown title={"Options"} id="option-dropdown">
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/extend");
                      }}
                    >
                      + Renew
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/change-seat");
                      }}
                    >
                      Change Seat
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleSearch}>
                      Search
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        Navigate("/todays-data");
                      }}
                    >
                      View Todays data
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}

              {/* View Seat */}
              {_id && (
                <LinkContainer to={"/view-seats"}>
                  <Nav.Link>
                    <i className="fa-solid fa-couch" /> View Seats
                  </Nav.Link>
                </LinkContainer>
              )}

              {/* Logout dropdown */}
              {_id ? (
                <>
                  <NavDropdown title={name} id="profile-dropdown">
                    <NavDropdown.Item onClick={handleLogut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to={"/login"}>
                  <Nav.Link>
                    <i className="fas fa-user" /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
