import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/slices/User';

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { _id, name, isAdmin } = useSelector((state) => state.user.userInfo);

  const handleLogut = () => {
    dispatch(logoutUser());
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
              {_id && (
                <LinkContainer to={'/register'}>
                  <Nav.Link>
                    <i className="fas fa-shopping-cart" /> Register
                  </Nav.Link>
                </LinkContainer>
              )}
              {_id ? (
                <>
                  <NavDropdown title={name} id="profile-dropdown">
                    <NavDropdown.Item onClick={handleLogut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to={'/login'}>
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
