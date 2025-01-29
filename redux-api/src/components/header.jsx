import { Container, Navbar, Nav } from "react-bootstrap";
import React from "react";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#681820" }} variant="dark">
      <Container>
        <Navbar.Brand href="/">Products</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/addproduct" style={{ color: "white" }}>
            Add Product
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
