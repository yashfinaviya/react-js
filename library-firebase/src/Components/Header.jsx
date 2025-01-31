import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './library.css'

function Header() {
  return (
    <>
      <Container>
        <Navbar>
          <Container>
            <Navbar.Brand href="/" className="bttn bttn-1"> <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>Home</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end bttn bttn-1">
              <Nav.Link href="/add"><svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>Add Book</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;