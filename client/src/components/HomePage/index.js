import React from 'react';
import './HomePage.css';


const HomePage = () => {

    // const scheduleDateTime = new Date(Date.UTC(2021,2,18,2,0))

    // const date = scheduleDateTime.getDate();
    // const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // function formatAMPM(date) {
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0'+minutes : minutes;
    //     var strTime = hours + ':' + minutes + ' ' + ampm;
    //     return strTime;
    // }

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
                17 Feb, 2021 9:00 PM EST<br/>
                18 Feb, 2021 7:30 AM IST
            </div>
            <div className="homepage-info">
                Zoom meeting link will be available here before the session
            </div>
        </div>        
    )
}

export default HomePage;