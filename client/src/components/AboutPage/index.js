import React from 'react';

import './AboutPage.css';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="photo-holder">
                <img id="speaker-photo" src="speaker.jpg" />
            </div>
            <div className="detail-holder">
                <div id="speaker-name">
                    Bjoern Kingsley
                </div>
                <div id="speaker-details">
                For the introduction, you can mention that my new title starting March will be Director, Agile Learning and Community Engagement / Lead Agile Coach
                at Manulife. I will be involved in planning the rollout of global Agile transformation for Manulife worldwide with its more than 30,000 employees.
                </div>
            </div>
        </div>        
    )
}

export default AboutPage;