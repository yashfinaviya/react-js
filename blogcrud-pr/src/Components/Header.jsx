import { Container, Nav, Navbar } from "react-bootstrap";
import './blog.css'
function Header() {
    return (
        <>
            <Container>
                <Navbar className="header bg-body-tertiary mt-2">
                    <Container>
                        <Navbar.Brand href="/">Show Blogs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <Nav.Link href="/Addblog" className="fw-bolder fs-5">Add Blog</Nav.Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}

export default Header;