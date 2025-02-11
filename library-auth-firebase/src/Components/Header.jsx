import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync } from "../services/actions/auth.action";
import './library.css'

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const handleLogOut = () => {
    dispatch(logOutAsync())
  }

  return (
    <>
      <Container>
        <Navbar className="bg-body-tertiary header">
          <Container>
            <Navbar.Brand href="/" className=" squishy squishy-cosmic">Home</Navbar.Brand>
            <Navbar.Toggle />
            {user ? <Nav.Link href="/add" className=" squishy squishy-cosmic">Add Book</Nav.Link> : ""}
            {!user ? <Nav.Link href="/login" className=" squishy squishy-cosmic">Login</Nav.Link> : <Button onClick={handleLogOut} className=" squishy squishy-cosmic">LogOut</Button>}
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;