import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <Container fluid>
                <Navbar.Brand href="#home" style={{ height: '100px' }} className="ps-5 pt-3">
                    <img src="/src/assets/img/icona.png" height="100%" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end pe-5">
                    <Nav style={{ fontSize: '1.2rem' }}>
                        <Nav.Link href="#" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="#" style={{ color: 'white' }}>About</Nav.Link>
                        <Nav.Link href="#" style={{ color: 'white' }}>Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;