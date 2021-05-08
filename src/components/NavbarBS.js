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
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sofas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Sillas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Guardado</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Mesas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Info</Nav.Link>
 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
