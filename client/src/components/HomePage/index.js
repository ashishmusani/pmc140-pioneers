import React from 'react';
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="homepage" >
            <div className="homepage-header">Pioneers</div>
            <div className="homepage-sub-header">present</div>
            <div className="homepage-title">
                <div id="homepage-title-1">The</div>
                <div id="homepage-title-2">Gamification</div>
                <div id="homepage-title-3">Guide</div>
            </div>
            <div className="homepage-tagline">
                <i>Taking teams back in time to leap forward</i>
            </div>
            <div className="homepage-schedule">
                3 March, 2021 9:00 PM EST<br/>
                4 March, 2021 7:30 AM IST
            </div>
            <div className="homepage-info">
                <a href="https://senecacollege-ca.zoom.us/j/95951046144?pwd=NW5TTVpYbWdHbWI1YklZUmQvbVBaZz09"
                target="_blank">
                    <img className="homepage-zoom_logo" src="zoom_logo.png"/>
                </a>
            </div>
        </div>        
    )
}

export default HomePage;