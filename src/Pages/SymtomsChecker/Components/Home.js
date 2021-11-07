import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Row className="symtoms_home mt-2">
            <Col xl={6} className="mt-2">
                <h3>Hello !</h3>
                <p>
                    You’re about to use a short (3 min), safe and anonymous health checkup. Your answers will be carefully analyzed and you’ll learn about possible causes of your symptoms.
                </p>
                <Link to="/interview"><Button>Next</Button></Link>
            </Col>
            <Col xl={4} className="mt-2">
                
            </Col>
        </Row>
    )
}

export default Home
