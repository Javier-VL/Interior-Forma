import React from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap'

export default function NavbarBS() {
    return (
        <React.Fragment>
            <Navbar className="container-fluid"   collapseOnSelect expand="lg" bg="transparent"  variant="light" >
                <Navbar.Brand href="#home">Interior Forma</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler"></Navbar.Toggle>
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Sofas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Esquineros</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Love Seat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ocasionales</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sillones</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Sillas</Nav.Link>
                        <Nav.Link href="#pricing">Guardado</Nav.Link>
                        <Nav.Link href="#pricing">Mesas</Nav.Link>
                        

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Info</Nav.Link>
 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
