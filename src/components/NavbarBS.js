import { Dropdown } from 'bootstrap';

import React,{useState} from 'react'
import { Navbar,Nav,NavDropdown, Form, Search, InputGroup, Button } from 'react-bootstrap'
import {getProductByName} from '../selectors/getProductByName'
import { Link } from 'react-router-dom'


export default function NavbarBS() {

    //Buscador
    const [termino, guardarTermino] = useState('')

    //Para mostrar cuando pase el cursor
    const [show, setShow] = useState(false)

    const showDropdown = (e) => {
        setShow(!show);
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
          });
    }

    const hideDropdown = (e) => {
        setShow(false);
    }

    const handleScroll = ()=> {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
          });
    }

    return (
        <React.Fragment>

            <Navbar className=" bg-light justify-content-between"   collapseOnSelect expand="lg" bg="#c2c2c2"  variant="light" >

                <Navbar.Brand href="#home">‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎InteriorForma</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler"></Navbar.Toggle>

                


                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form.Control 
                    type="text" 
                    placeholder="Buscar" 
                    onChange = {e => guardarTermino(e.target.value)}/>
                    <Link
                       to={`./producto/${getProductByName(termino)}`}
                    >
                    <Button variant="light">Buscar</Button>
                    </Link>
                </Navbar.Collapse>


                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Contacto" id="collasible-nav-dropdown">
                        <NavDropdown.Item >Conocenos</NavDropdown.Item>
                        <NavDropdown.Item >Ubicación</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>

            </Navbar>
        </React.Fragment>
    )
}
