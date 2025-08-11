'use client';

import { Container, Navbar, Nav } from 'react-bootstrap';
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
            <Nav.Link>POSTINGS</Nav.Link>
            <Nav.Link>CONTACT US</Nav.Link>
            <Nav.Link>HELP</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
