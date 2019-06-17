import React, { Component, Fragment } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar, { Brand, Collapse, Text, Toggle } from 'react-bootstrap/Navbar';
import Nav, { Link } from 'react-bootstrap/Nav';

export default class MyNavbar extends Component {

  constructor() {
    super();
    this.state = { name: '' }
  }

  render() {
    const { name } = this.state;
    
    return (
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <LinkContainer to="/vote">
          <Brand>
            #NerdElections
          </Brand>
        </LinkContainer>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/vote">
              <Link>Vote</Link>
            </LinkContainer>
            <LinkContainer to="/history">
              <Link>My Votes</Link>
            </LinkContainer>
            <LinkContainer to="/rankings">
              <Link>Rankings</Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {!!name ?
              <Fragment>
                <Text>Hello <strong className="mr-2">{name}</strong></Text>
                <LinkContainer to="/logout">
                  <Link>Logout</Link>
                </LinkContainer>
              </Fragment>
              :
              <Fragment>
                <LinkContainer to="/login">
                  <Link>Login</Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Link>Register</Link>
                </LinkContainer>
              </Fragment>
            }
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
