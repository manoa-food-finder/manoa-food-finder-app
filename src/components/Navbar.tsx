/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import '../app/navbar.css';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar bg="light" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="mainNav">
        <Image src="uhm-logo.jpg" width="75px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-centor">
            {currentUser
              ? [
                  <Nav.Link
                    id="map"
                    href="/map"
                    key="map"
                    active={pathName === '/map'}
                    className="mainNav"
                  >
                    MAP
                  </Nav.Link>,
                  <Nav.Link
                    id="list-stuff-nav"
                    href="/list"
                    key="list"
                    active={pathName === '/list'}
                    className="mainNav"
                  >
                    POSTING
                  </Nav.Link>,
                  <Nav.Link
                    id="list-stuff-nav"
                    href="/contact"
                    key="contact"
                    active={pathName === '/contact'}
                    className="mainNav"
                  >
                    CONTACT US
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link
                id="admin-stuff-nav"
                href="/admin"
                key="admin"
                active={pathName === '/admin'}
                className="mainNav"
              >
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
            {currentUser && role === 'VENDOR' ? (
              <Nav.Link
                id="vendor-nav"
                href="/vendor"
                key="vendor"
                active={pathName === '/vendor'}
                className="mainNav"
              >
                Vendor Info
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
