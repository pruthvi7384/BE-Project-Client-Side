import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './NavigationBar.css';

function NavigationBar({path}) {
  const History = useHistory();
  const BrowserPath = History.location.pathname;
  const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/symptomschecker', text: 'Symptoms Checker' },
    { to: '/diseases', text: 'Diseases' },
    { to: '/contact', text: 'Contact' },
    { to: '/signup', text: 'SignUp' },
    { to: '/login', text: 'LogIn' },
  ]

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg">
            <Container>
              <Link className="navbar-brand " to="/"><i className="fas fa-laptop-medical"></i> <span> E </span> Health</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                  {LINKS.map(item =>(
                    <Link key={item.text} className={item.to===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={item.to}>{item.text}</Link>
                   ))
                  }
                </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default NavigationBar
