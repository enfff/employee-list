import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import githubIcon from "../misc/github.svg"

const AppNavbar = () => {

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container className="me-auto">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add-user">
                        <Nav.Link>Add User</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/map">
                        <Nav.Link>Map</Nav.Link>
                    </LinkContainer>
                </Navbar.Collapse>
                <Navbar.Brand className="d-flex" href="https://github.com/enfff">
                    <Image
                        alt=""
                        src={githubIcon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
 
export default AppNavbar;