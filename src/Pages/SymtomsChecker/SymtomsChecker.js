import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './SymtomsChecker.css'
function SymtomsChecker() {
    return (
        <Container className="symtoms_checker mt-4">
            <Row id="symtoms_checker_heading">
                <h3>Symtoms Checker</h3>
                <p>Checke Your Symtoms Now!</p>
            </Row>
        </Container>
    )
}

export default SymtomsChecker
