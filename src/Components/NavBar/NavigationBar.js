import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/logo.png';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img src={LOGO} alt="diseases prediction system logo" className="logo img-fluid"/>
                    <span className="logo__title">Lifestyle Diseases</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/diseases">Diseases</Link>
                        <Link className="nav-link" to="/symptomscheaker">Check Symptoms</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/signup">SignUp</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/"><i class="fab fa-twitter"></i></Link>
                        <Link className="nav-link" to="/"><i class="fab fa-facebook-f"></i></Link>
                        <Link className="nav-link" to="/"><i class="fab fa-instagram"></i></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default NavigationBar
