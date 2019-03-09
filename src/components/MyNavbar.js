import React, { Component, Fragment } from 'react';
import Navbar, { Brand, Collapse, Text, Toggle } from 'react-bootstrap/Navbar';
import Nav, { Link } from 'react-bootstrap/Nav';

class MyNavbar extends Component {

    constructor() {
        super();
        this.state = { name: 'Thiss' }
    }

    render() {
        const { name } = this.state;
        return (
            <Navbar bg="dark" variant="dark" expand="md">
                <Brand href="/">#NerdElections</Brand>
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/">Vote</Link>
                        <Link href="/">My Votes</Link>
                        <Link href="/">Rankings</Link>
                    </Nav>
                    <Nav>
                        {name !== '' &&
                            <Fragment>
                                <Text>Hello <strong className="mr-2">{name}</strong></Text>
                                <Link href="/">Logout</Link>
                            </Fragment>
                        }
                        {name === '' &&
                            <Fragment>
                                <Text>Already have an account?</Text>
                                <Link href="/">Login</Link>
                            </Fragment>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default MyNavbar;
