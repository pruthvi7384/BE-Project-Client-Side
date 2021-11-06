import React from 'react'
import './Profile.css'
import { Container, Row } from 'react-bootstrap';
function Profile() {
    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>Pruthviraj Rajput</span> Profile</h3>
            </Row>
        </Container>
    )
}

export default Profile
