import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';

import urlContext from '../../contexts/urlContext';


import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const QuestionPage = () => {

    const serverContext = useContext(urlContext);
    const serverUrl = serverContext.serverUrl;

    const [isProcessing, setIsProcessing] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false);

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

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleSubmit = () =>{
        setIsProcessing(true);
        if(name.length>0 && question.length>0 && emailIsValid){
            const questionDetails = {
                "name": name,
                "email": email,
                "question": question
              }
            
            //
            console.log("ServerUrl: " + serverUrl);
            console.log("questionDetails:");
            console.log(questionDetails);
            //

            axios.post(`${serverUrl}/api/questions`, questionDetails)
            .then(res => {
                console.log("res");
                console.log(res);
                if(res.status === 200){
                    alert("Success! Your question has been submitted.")
                    setName("");
                    setEmail("");
                    setQuestion("");
                    setIsProcessing(false);
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
    

    return (
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
            <Form.Group className="justify-content-center" as={Row}>
                <Form.Label column sm="3" md="1" lg="1">
                    Question
                </Form.Label>
                <Col sm="5" md="4" lg="4">
                    <Form.Control 
                    as="textarea"
                    placeholder="Enter you question"
                    value={question}
                    onChange={handleQuestionChange}
                    rows={3} 
                    disabled={isProcessing}
                    />
                </Col>
            </Form.Group>

            <Form.Group className="justify-content-center" as={Row}>
                <Col sm="6" md="5" lg="5">
                This information will be used only for communication and reporting purposes.
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-center">
                <Col sm="8" md="10" lg="5">
                    <Button 
                        className="btn-block" 
                        onClick={handleSubmit}
                        disabled={isProcessing}  
                    >
                        {isProcessing? "Please wait..." : "Submit my question"}
                    </Button>
                </Col>
            </Form.Group>
            
        </Form>        
    )
}

export default QuestionPage;