import { Dropdown } from 'bootstrap';
import React,{useState} from 'react'
import { Navbar,Nav,NavDropdown, Form, Search, InputGroup, Button } from 'react-bootstrap'


export default function NavbarBS() {

    //Para mostrar cuando pase el cursor
    const [show, setShow] = useState(false)

    const showDropdown = (e) => {
        setShow(!show);
    }

    const hideDropdown = (e) => {
        setShow(false);
    }

    return (
        <React.Fragment>
            <Navbar className=" bg-light justify-content-between"   collapseOnSelect expand="lg" bg="transparent"  variant="light" >
                <Navbar.Brand href="#home">InteriorForma</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler"></Navbar.Toggle>
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Productos" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <NavDropdown  title="Profile" id="collasible-nav-dropdown-right" />
                            <NavDropdown.Item href="#action/3.2">Sillas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Guardado</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Mesas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form.Control type="text" placeholder="Buscar" />
                    <Button variant="light">Buscar</Button>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Contacto" id="collasible-nav-dropdown">
                        <NavDropdown.Item>Ubicación</NavDropdown.Item>
                        <NavDropdown.Item>Información</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>

            </Navbar>
        </React.Fragment>
    )
}
