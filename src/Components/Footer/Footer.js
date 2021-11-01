import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import LOGO from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Container fluid className="Footer">
            <Row className="Footer_Border">
                <Col className="Footer_Logo" xl={4}>
                    <img src={LOGO} alt="diseases prediction system logo" className="Logo_Footer img-fluid"/>
                    <p className="logo__title">Lifestyle Diseases</p>
                    <ul className="Footer_Contact">
                        <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                        <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                        <li><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                    </ul>
                </Col>
                <Col className="Footer_Menu" xl={4}>
                    <p>Get To Know Us</p>
                    <ul className="Menu_Iteams">
                       <li><Link  to="/">Home</Link></li>
                       <li><Link  to="/about">About</Link></li>
                       <li><Link  to="/diseases">Diseases</Link></li>
                       <li><Link  to="/symptomscheaker">Check Symptoms</Link></li>
                       <li><Link  to="/contact">Contact</Link></li>
                    </ul>
                </Col>
                <Col className="Footer_Menu" xl={4}>
                    <p>Let Us Help You</p>
                    <ul className="Help_Footer">
                       <li><Link  to="/symptomscheaker">Check Your Symtoms.</Link></li>
                       <li><Link  to="/contact">Ask Any Query ?</Link></li>
                       <li><Link  to="/chat">Let's Conect With Us</Link></li>
                       <li><Link  to="/feedbacks">Feedbacks.</Link></li>
                       <li><Link  to="/information">Information About System.</Link></li>
                    </ul>
                </Col>
            </Row>
            <Row className="Developer">
                <p>&copy; 2021-22 ~ Lifestyle Diseases, All Rights Reserved.</p>
                <p><Link to="developers"><span>Develop By ~ </span> <i class="fab fa-github"></i> BE Project Id 09.</Link></p>
            </Row>
      </Container>
    )
}

export default Footer
