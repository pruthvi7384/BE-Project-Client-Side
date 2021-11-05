import React from 'react'
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import DiseasesInfo from '../../API/DiseasesInfo';
import './Disease.css'
import SubNavigationBar from '../../Components/SubNavigationBar/SubNavigationBar';
import Quetion from './Quetion';
import Feedback from './Feedback';
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
        <>
        <Container>
            <Row className="mt-4">
                <SubNavigationBar id={disease_info._id} name={disease_info.disease_name}/>
            </Row>
        </Container>
        <Container className="disease_page">
            <Row className="disease_heading">
                <h3>Disease <span> {disease_info.disease_name}</span></h3>
                <p>Disease <span> Malaria </span> Information</p>
            </Row>
            <Row className="disease_info">
                <Col xl={6}>
                    <img className="disease_image" src={disease_info.image ? `${disease_info.image}` : `https://intersectiq.com/assets/images/blogs/6/cover.jpg`} alt="" />
                </Col>
                <Col xl={6}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{disease_info.details.Description}</p>
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{disease_info.disease_name}</span> Disease <span> Symptoms </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        disease_info.details.Symptoms.map(symptom => (
                            !symptom ?
                            'Symtoms Detailes Not Mentions !' :
                            <p><span><i class="fas fa-hand-point-right"></i></span>  {symptom}</p>
                        ))
                    
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{disease_info.disease_name}</span> Disease <span> Precautions </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        disease_info.details.precautions.map(precaution => (
                            !precaution ?
                            'Precaution Detailes Not Mentions !' :
                            <p><span><i class="fas fa-hand-point-right"></i></span>  {precaution}</p>
                        ))
                    
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{disease_info.disease_name}</span> Disease <span> Medcines </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        disease_info.details.medcine.map(medcine => (
                            !medcine ?
                            'Medcine Detailes Not Mentions !' :
                            <p><span><i class="fas fa-hand-point-right"></i></span>  {medcine}</p>
                        ))
                    
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{disease_info.disease_name}</span> Disease <span> Vaccine </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        disease_info.details.vaccine.map(vaccine => (
                            !vaccine ?
                            'Vaccine Detailes Not Mentions !' :
                            <p><span><i class="fas fa-hand-point-right"></i></span>  {vaccine}</p>
                        ))
                    
                    }
                </Col>
            </Row>
            <Row className="disease_synptoms mt-2">
                <h4><span>{disease_info.disease_name}</span> Disease <span>Most Predicated Area </span></h4>
                <Col xl={8} className="mt-2">
                    <p><span><i class="fas fa-hand-point-right"></i></span> <b>PIN CODE :</b> <b style={{color:'#008aff'}}>{
                        !disease_info.most_predicated_area.pin_code ?
                        'Most Predicated Area Pin Code Not Mentions !' :
                        disease_info.most_predicated_area.pin_code
                    }.</b></p>
                    <p><span><i class="fas fa-hand-point-right"></i></span> <b>CITY :</b> <b style={{color:'#008aff'}}>{
                        !disease_info.most_predicated_area.city ?
                        'Most Predicated Area City Detailes Not Mentions !' :
                        disease_info.most_predicated_area.city
                    }.</b></p>
                    <p><span><i class="fas fa-hand-point-right"></i></span> <b>AREA :</b> <b style={{color:'#008aff'}}>{
                        !disease_info.most_predicated_area.area ?
                        'Most Predicated Area Detailed Not Mentions !' :
                        disease_info.most_predicated_area.area
                    }.</b></p>
                </Col>
            </Row>
        </Container>
        <Container className="disease_add_info mt-3">
            <Row className="align-items-center">
                <Col xl={2}  className="profile_doctor_img text-center" >
                    <img src="data:image/jpeg;base64,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" alt="" />
                </Col>
                <Col xl={10} className="doctor_info">
                    <p>Added By</p>
                    <h5>Pruthviraj Rajput</h5>
                    <h6>MD</h6>
                    <p>{disease_info.data_updated_at}</p>
                    <p>Kanika has 4 years of experience in writing blogs and marketing content for travel. And when she’s not writing, she’s either exploring new terrains in a different corner of the world, or out in the city freezing urban scenarios in her camera.</p>
                </Col>
            </Row>
        </Container>
        <Container className="disease_btns mt-3">
            <Row className="justify-content-center align-items-center">
                <Col xl={4} className="text-center mt-2" >
                    <Quetion/>
                </Col>
                <Col xl={4} className="text-center mt-2">
                    <Feedback/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Disease
