import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { CartIcon } from '../icon/CartIcon'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">BPM Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Genres" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/genre/Techno">Techno</NavDropdown.Item>
                        <NavDropdown.Item href="/genre/TechHouse">Tech House</NavDropdown.Item>
                        <NavDropdown.Item href="/genre/Progressive">Progressive</NavDropdown.Item>
                                
                        
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