import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Nav.Link as={Link} to={to} className={isActive ? 'active' : ''}>
      {children}
    </Nav.Link>
  );
};

const NavUser = ({ userName, onLogout }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/balance">
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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <CustomNavLink to="/balance">Balance</CustomNavLink>
            <CustomNavLink to="/deposit">Deposit</CustomNavLink>
            <CustomNavLink to="/withdraw">Withdraw</CustomNavLink>
            <CustomNavLink to="/transfer">Transfer</CustomNavLink>
          </Nav>
          <Nav>
            <Navbar.Text>
              Welcome, {userName}{' '}!
            </Navbar.Text>
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavUser;
