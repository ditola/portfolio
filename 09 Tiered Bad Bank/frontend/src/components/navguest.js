import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavGuest = () => {
  const CustomNavLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <Nav.Link as={Link} to={to} {...props} className={isActive ? 'active' : ''}>
        {children}
      </Nav.Link>
    );
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            alt=""
            src="../bank-97.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          BadBank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav variant="underline" className="me-end" activeKey={"/"}>
            <Nav.Item>
              <CustomNavLink to={"/"}>Home</CustomNavLink>
            </Nav.Item>
            <Nav.Item>
              <CustomNavLink to={"/register"}>Register</CustomNavLink>
            </Nav.Item>
            <Nav.Item>
              <CustomNavLink to={"/login"}>Login</CustomNavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavGuest;
