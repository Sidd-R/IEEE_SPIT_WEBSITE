import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faUserSecret, faCircleInfo } from "@fortawesome/free-solid-svg-icons"
function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">

                <Container>
                    <img src={require("../images/ieee_logo.png")} alt="logo" className='logo' />
                    <Navbar.Brand href="/" className="main-name">IEEE SPIT</Navbar.Brand>
                    <Nav className="Navbar">
                        <Nav.Link href="/"><FontAwesomeIcon icon={faHome} />Home</Nav.Link>
                        <Nav.Link href="/events"><FontAwesomeIcon icon={faCode} />Events</Nav.Link>
                        <Nav.Link href="#pricing"><FontAwesomeIcon icon={faUserSecret} />Team</Nav.Link>
                        <Nav.Link href="#pricing"><FontAwesomeIcon icon={faCircleInfo} />About us</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default ColorSchemesExample;