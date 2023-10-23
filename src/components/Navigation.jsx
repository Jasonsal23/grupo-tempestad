import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function Navigation() {
    return (
        <Container fluid>
            <Navbar expand = "lg" className="navbar" sticky="top">
                <Navbar.Brand href="/" style={{color: 'black'}}>Grupo Tempestad</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link style={{color: '#d6481e'}} href="/">Home</Nav.Link>
                    <Nav.Link style={{color: '#d6481e'}} href="/Contrataciones">Contrataciones</Nav.Link>
                    <Nav.Link style={{color: '#d6481e'}} href="/Vídeos">Vídeos</Nav.Link>
                    <Nav.Link style={{color: '#d6481e'}} href="/Calendario">Calendario</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}