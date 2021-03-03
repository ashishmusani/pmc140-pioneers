import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="bottom">
        <Navbar.Brand id="" href="/">
            <img src="/logo.png" height="40vmin"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">The Speaker</Nav.Link>
            <Nav.Link href="/question">Ask a question</Nav.Link>
            {/* <Nav.Link href="/attendance">Mark me present</Nav.Link> */}
            <Nav.Link href="/team">The Team</Nav.Link>
            {/* <Nav.Link href="/feedback">Feedback</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;