import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    const navbarStyle = {
        padding: '50px'
    }

    return(
        <Navbar expand="lg" className="header-navbar">
            <Container>
                <Navbar.Brand href='#home'>Fighting Game Portfolio</Navbar.Brand>
                    <Nav className='header-nav'>
                        <Nav.Link style={navbarStyle} href='#builder'>Portfolio Builder</Nav.Link>
                        <Nav.Link style={navbarStyle} href='#lookup'>User Lookup</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;