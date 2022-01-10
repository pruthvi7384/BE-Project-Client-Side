import React,{ useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner} from 'react-bootstrap';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Moment from 'react-moment';
import axios from 'axios';
import './Diseases.css';
import { Link } from 'react-router-dom';

function Diseases() {
    const [disease, setDisease] = useState([]);
    const [isloading, setIsloading] = useState(true);

    useEffect(()=>{
        const getDiseasesInfo = async ()=>{
            try{
                const res = await axios.get('https://lifestylediseases.herokuapp.com/alldiseaseverify');
                setDisease(res.data);
                setIsloading(false);
             }catch(e){
                 console.log(e.message);
             }
        }
        getDiseasesInfo();
        return ()=>{
           setDisease([]);
        }
    },[]);

    if(isloading){
        return(
            <Container style={{height:"100vh"}}className="d-flex justify-content-center align-items-center">
                <Row >
                        <Spinner animation="grow" variant="info" />
                </Row>
            </Container>
        )
    }

    return (
        <Container className="Diseases_All mt-4">
            <Row id="Diseases_heading">
                <h3>Diseases</h3>
                <p>All Diseases Display Here.</p>
            </Row>
            <SearchBar/>
            <Row className="mt-4">
                {
                    disease.map(item => (
                        <Col xl={4} key={item._id}>
                            <Card>
                                <Card.Img variant="top" src={item.detail.image !== '' ? `${item.detail.image}` : "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/chidrens-health/blounts-disease-teaser.ashx"} />
                                <Card.Body>
                                    <Card.Title>{item.desease_name}</Card.Title>
                                    <Card.Text>
                                        {item.detail.description !=='' ? `${item.detail.description.split(' ').slice(0, 25).join(' ').replace(/<.+?>/g, "")}...`
                                        : 'No description' }
                                    </Card.Text>
                                </Card.Body>
                                <div className="Footer__Card">
                                    <ul>
                                        <li><Link to="/diseases"><i className="far fa-clock"></i> <span> <Moment local date={item.created_date} /></span></Link></li>
                                        <li><Link to={`/disease/${item._id}`}><Button >Read More</Button></Link></li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    
    )
}

export default Diseases
