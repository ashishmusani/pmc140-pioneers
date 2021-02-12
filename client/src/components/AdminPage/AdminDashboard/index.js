import React, { useState } from 'react';
import axios from 'axios';

import './AdminDashboard.css'

import AttendeesTab from './Tabs/AttendeesTab';
import PollsTab from './Tabs/PollsTab';
import QuestionsTab from './Tabs/QuestionsTab';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

const AdminDashboard = (props) => {

    const logOut = props.logOut;

    const [currentTab, setCurrentTab] = useState();
    const [attendees, setAttendees] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [polls, setPolls] = useState([]);

    const fetchAttendees = () => {
        axios.get(`${process.env.SERVER_URL}api/attendees`)
        .then(res => {
            res.data && setAttendees([...res.data])
        })
        .catch(err => {
            alert("Oops there was a problem fetching. Please try again")
        })
    }

    const fetchQuestions = () => {
        console.log("Fetching questions")
    }

    const fetchPolls = () => {
        console.log("Fetching polls")        
    }

    const changeTab = (key) => {
        setCurrentTab(key);
        switch(key){
            case "attendees":
                fetchAttendees();
                break;
            case "questions":
                fetchQuestions();
                break;
            case "polls":
                fetchPolls();
                break;    
        }
    }

    return (
        <div id="adminDashboard" >
            <div id="logoutButton">
                <Button onClick={logOut}>Logout</Button>
            </div>
            <Tabs defaultActiveKey={0} onSelect={changeTab}>
                <Tab eventKey="attendees" title="Attendees">
                    {currentTab === "attendees"? (<AttendeesTab attendees={attendees}/>) : null}
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    {currentTab === "questions"? (<QuestionsTab questions={questions}/>) : null}
                </Tab>
                <Tab eventKey="polls" title="Polls">
                    {currentTab === "polls"? (<PollsTab polls={polls}/>) : null}
                </Tab>
            </Tabs>
        </div>        
    )
}

export default AdminDashboard;