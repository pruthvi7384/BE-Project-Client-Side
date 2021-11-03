import React from 'react'
import { Container, Row } from 'react-bootstrap';
import DiseasesInfo from '../../API/DiseasesInfo'
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Diseases.css'

function Disease() {
   const info = DiseasesInfo();
   console.log(info);
    return (
        <Container className="Diseases_All mt-4">
            <Row id="Diseases_heading">
                <h3>Diseases</h3>
                <p>All Diseases Display Here.</p>
            </Row>
            <SearchBar/>
        </Container>
    )
}

export default Disease
