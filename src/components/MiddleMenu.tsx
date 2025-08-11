'use client';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image'; // If using a logo image

export default function MiddleMenu() {
  return (
    <Navbar expand="lg" className="uh-navbar">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={100} />
        </Navbar.Brand>

        <Navbar.Toggle />

        {/* Centered menu */}
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Nav.Link>MAP</Nav.Link>
            <NavDropdown title={<span>POSTINGS</span>} id="brands-nav">
              <NavDropdown.Item>View Postings</NavDropdown.Item>
              <NavDropdown.Item>Create New Posting</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>CONTACT US</Nav.Link>
            <Nav.Link>HELP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
