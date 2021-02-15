import React from 'react';

import './TeamPage.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const TeamPage = () => {
    return (
        <div className="team-page">
            <Row id="team-list">
                <Col sm="3" md="3" xs="6">
                    <Card className="team-card">
                        <Card.Img className="team-card-image" variant="top" src="ashish.jpg" />
                        <div className="team-card-body">
                            Ashish Musani 
                        </div>
                    </Card>
                </Col>
                <Col sm="3" md="3" xs="6">
                    <Card className="team-card">
                        <Card.Img className="team-card-image" variant="top" src="sonali.jpg" />
                        <div className="team-card-body">
                            Sonali S.
                        </div>
                    </Card>
                </Col>
                <Col sm="3" md="3" xs="6">
                    <Card className="team-card">
                        <Card.Img className="team-card-image" variant="top" src="neethi.jpg" />
                        <div className="team-card-body">
                            Neethi Geever 
                        </div>
                    </Card>
                </Col>
                <Col sm="3" md="3" xs="6">
                    <Card className="team-card">
                        <Card.Img className="team-card-image" variant="top" src="andrei.jpg" />
                        <div className="team-card-body">
                            Andrei Tarakanov
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TeamPage;