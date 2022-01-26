import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { CartIcon } from '../icon/CartIcon'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">BPM Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">News</Nav.Link>
                        <NavDropdown title="Genres" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Techno</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Tech House</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Progressive</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Downtempo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Electro</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Dubstep</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Dance</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Drum & Bass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Trance and PsyTrance</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ambient</NavDropdown.Item>
                                
                        
                        </NavDropdown>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type='search'
                                placeholder='Search for artist, album, or track'
                                className='me-2'
                                aria-label='Search'
                            />
                            <Button className='px-3' variant="dark">Search</Button>
                        </Form>

                    </Navbar.Collapse>
                    <CartIcon />
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar