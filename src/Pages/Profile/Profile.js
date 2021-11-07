import React from 'react'
import './Profile.css'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
function Profile() {
    const Quetiones = [
        {
            id:"14h4h",
            quection:"Please Tell me about This Platform?",
            answer:"This platform shows the detailes of the lifestyle diseases and also you can cheack your symtoms"
        },
        {
            id:"2gg2gg",
            quection:"Can i see the Disease detailes ?",
            answer:""
        }
    ]
    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>Pruthviraj Rajput</span> Profile</h3>
                <p>Your Profile And Quetion Ask History Here</p>
            </Row>
            <Row className="profile mt-2">
               <Col xl="4">
                    <ul>
                        <li>User Id : <span>pruthvi1235rajput</span></li>
                        <li>Name : <span>Pruthviraj Rajput</span></li>
                        <li>Email : <span>pruthviraj@gmail.com</span></li>
                        <li>Join Date : <span>30 Nov 2021</span></li>
                        <li>Address : <span>425444, Shahada, Nandurbar</span></li>
                    </ul>
               </Col>
            </Row>
            <Row className="quection_profile mt-4">
                <h3><span>Your Quection </span> Asked</h3>
                <p>Your Asked Quection Detailes Available Here</p>
                <Col xl="6" className="mt-2">
                    <Accordion flush>
                        {
                            Quetiones.map(quection => (
                                <Accordion.Item key={quection.id} eventKey={quection.id}>
                                    <Accordion.Header>{quection.quection}</Accordion.Header>
                                    <Accordion.Body>
                                        {
                                            quection.answer ?
                                                quection.answer
                                                :
                                                'Answer Is Not Found ! Sorry For That We try to answer your quection as per as posibale'
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
               </Col>
            </Row>
        </Container>
    )
}

export default Profile
