import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import DiseasesInfo from '../../API/DiseasesInfo'
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Diseases.css'
import { Link } from 'react-router-dom';

function Diseases() {
   const Info = DiseasesInfo();
    return (
        <Container className="Diseases_All mt-4">
            <Row id="Diseases_heading">
                <h3>Diseases</h3>
                <p>All Diseases Display Here.</p>
            </Row>
            <SearchBar/>
            <Row className="mt-4">
                {
                    Info.map(item => (
                        <Col xl={4} key={item._id}>
                            <Card>
                                <Card.Img variant="top" src="https://sahyadrihospital.com/wp-content/uploads/2021/04/Be-aware-of-malaria-the-deadly-disease.jpg" />
                                <Card.Body>
                                    <Card.Title>{item.disease_name}</Card.Title>
                                    <Card.Text>
                                        {item.details.Description  ? `${item.details.Description.split(' ').slice(0, 25).join(' ').replace(/<.+?>/g, "")}...`
                                        : 'No description' }
                                    </Card.Text>
                                </Card.Body>
                                <div className="Footer__Card">
                                    <ul>
                                        <li><Link to="/diseases"><i className="fas fa-user-md"></i> <span>{item.doctore_name}</span></Link></li>
                                        <li><Link to="/diseases"><i className="far fa-clock"></i> <span>{item.data_updated_at}</span></Link></li>
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
