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
                <div id="speaker-designation">
                    Senior Scrum Master / Agile Coach<br/>
                    Mackenzie Investments
                </div>
                <div id="speaker-details">
                    Mr. Bjoern Kingsley, based in Toronto, is a Senior Scrum Master at 
                    Mackenzie Investments. Starting March, he will be with Manulife, a Canadian 
                    multinational insurance company and financial services provider, as the Director 
                    for Agile Learning and Community Engagement / Lead Agile Coach. In this new 
                    position, he will be involved in planning the rollout of global Agile 
                    transformation for Manulife worldwide with its more than 30,000 employees.
                <br/>
                </div>
                <div id="speaker-linkedin">
                    <a href="https://www.linkedin.com/in/bjoernkingsley/" target="_blank">
                        <img id="linkedin-profile" src="linkedin.png" />
                    </a>
                </div>
            </div>
        </div>        
    )
}

export default AboutPage;