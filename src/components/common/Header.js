import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to="/" activeClassName="active">Parking</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/Item1">
            <NavItem eventKey={1}>Link 1</NavItem>
          </LinkContainer>
          <LinkContainer to="/Item2">
            <NavItem eventKey={2}>Link 2</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
            <LinkContainer to="/logout">
              <MenuItem eventKey={3.1}>Logout</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;