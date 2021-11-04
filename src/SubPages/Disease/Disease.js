import React from 'react'
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import DiseasesInfo from '../../API/DiseasesInfo';
import './Disease.css'
import SubNavigationBar from '../../Components/SubNavigationBar/SubNavigationBar';
function Disease() {
    // ===========Get Id From URL==========
    const {id} = useParams();
    // ==========Set All Disease Fron Database=======
    const Info = DiseasesInfo();
    // ================Find Disease Inforamation using id===============
    const disease_info= Info.find(dise => {
        return  dise._id = id;
    });
    console.log(disease_info); 
    return (
        <Container className="disease_page mt-4">
            <Row>
                <SubNavigationBar id={disease_info._id} name={disease_info.disease_name}/>
            </Row>
            <Row className="disease_heading">
                <h3>Disease <span> {disease_info.disease_name}</span></h3>
                <p>Disease <span> Malaria </span> Information</p>
            </Row>
            <Row className="disease_info">
                <Col xl={6}>
                    <img className="disease_image" src={`${disease_info.image}`} alt="Image" />
                </Col>
                <Col xl={6}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{disease_info.details.Description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Disease
