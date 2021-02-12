import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './AttendancePage.css';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AttendancePage = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [name, setName] = useState(localStorage.getItem('name') || "");
    const [email, setEmail] = useState(localStorage.getItem('email') || "");
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [isMarked, setIsMarked] = useState((name !== "") && (email !== ""));

    useEffect(()=>{
        console.log(isMarked)
    }, [])

    const validateEmail = (emailId) => {
        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(reg.test(String(emailId).toLowerCase())) {
            setEmailIsValid(true)
        } else {
            setEmailIsValid(false)
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email)
        validateEmail(email);
    }

    const handleSubmit = () =>{
        setIsProcessing(true);
        if(name.length>0 && emailIsValid){
            const attendeeDetails = {
                "attendeeName": name,
                "attendeeEmail": email
              }        
            //axios.post(`${window.location.href}login`, userCredentials)
            axios.post('http://localhost:5000/api/attendees', attendeeDetails)
            .then(res => {
                if(res.status === 200){
                    alert("Success! You have been marked present.")
                    setName("");
                    setEmail("");
                    localStorage.setItem("name", name);
                    localStorage.setItem("email", email);
                    setIsProcessing(false);
                    setIsMarked(true);
                } else {
                    alert("There was a problem! Please try again.")
                    setIsProcessing(false);
                }
            })
            .catch(err => {
                alert("There was a problem! Please try again.")
                setIsProcessing(false);
            })
            
        } else {
            alert("Error! Invalid data provided.");
            setIsProcessing(false);
        }
    }
    
    // const clearLocalStorage = () => {
    //     localStorage.removeItem("name");
    //     localStorage.removeItem("email");
    // }

    // clearLocalStorage();

    return isMarked? (`Hi ${name}! You have been marked present`) : (
        <Form id="attendancePage" >
            <Form.Group className="justify-content-center" as={Row}>
                <Form.Label column sm="3" md="1" lg="1">
                    Full Name
                </Form.Label>
                <Col sm="5" md="4" lg="4">
                    <Form.Control 
                        type="text" 
                        placeholder="Name as in seneca records"
                        value={name}
                        onChange = {handleNameChange}
                        disabled={isProcessing}  
                    />
                    <Form.Text>
                        {!name.length>0? "Enter a valid name" : null}
                    </Form.Text>
                </Col>
            </Form.Group>
            <Form.Group className="justify-content-center" as={Row}>
                <Form.Label column sm="3" md="1" lg="1">
                    Email
                </Form.Label>
                <Col sm="5" md="4" lg="4">
                    <Form.Control 
                    type="email" 
                    placeholder="Seneca email id"
                    value={email}
                    onChange = {handleEmailChange}  
                    disabled={isProcessing}  
                />
                    <Form.Text>
                        {!emailIsValid? "Enter a valid email id" : null}
                    </Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-center">
                <Col sm="8" md="10" lg="5">
                    <Button 
                        className="btn-block" 
                        onClick={handleSubmit}
                        disabled={isProcessing}  
                    >
                        {isProcessing? "Please wait..." : "Mark Me Present"}
                    </Button>
                </Col>
            </Form.Group>
        </Form>        
    )
}

export default AttendancePage;