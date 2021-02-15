import React, {useState} from 'react';
import axios from 'axios';

import './AdminPage.css';
import urlContext from '../../contexts/urlContext';

import AdminDashboard from './AdminDashboard';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AdminPage = () => {

    const serverContext = useContext(urlContext);
    const serverUrl = serverContext.serverUrl;

    const [isProcessing, setIsProcessing] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || "");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') || false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsProcessing(true);
        if(username.length>0 && password.length>0){
            const userDetails = {
                "username": username,
                "password": password
              }        
            axios.post(`${serverUrl}/api/login`, userDetails)
            .then(res => {
                if(res.status === 200){
                    setIsAdmin(true);
                    localStorage.setItem("username", username);
                    localStorage.setItem("isAdmin", isAdmin);
                } else {
                    alert("Oops! There was a problem. Please try again.")
                }
                setIsProcessing(false);
            })
            .catch(err => {
                if (err.response && err.response.status === 401){
                    alert("Incorrect credentials!")
                }
                else {
                    alert("Oops! There was a server problem. Please try after sometime.")
                }                
                setIsProcessing(false);
            })
            
        } else {
            alert("Error! Invalid data provided.");
            setIsProcessing(false);
        }
    }
    

    const logOut = () => {
        setUsername("");
        setPassword("");
        setIsAdmin("");
        localStorage.removeItem("username");
        localStorage.removeItem("isAdmin");
    }

    return isAdmin? (<AdminDashboard logOut={logOut}/>) : (
        <Form id="adminPage" onSubmit={handleSubmit}>
            <Form.Group className="justify-content-center" as={Row}>
                <Form.Label column sm="3" md="1" lg="1">
                    Username
                </Form.Label>
                <Col sm="5" md="4" lg="4">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Username"
                        value={username}
                        onChange = {handleUsernameChange}
                        disabled={isProcessing}  
                    />
                </Col>
            </Form.Group>
            <Form.Group className="justify-content-center" as={Row}>
                <Form.Label column sm="3" md="1" lg="1">
                    Password
                </Form.Label>
                <Col sm="5" md="4" lg="4">
                    <Form.Control 
                    type="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange = {handlePasswordChange}  
                    disabled={isProcessing}  
                />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="justify-content-center">
                <Col sm="8" md="10" lg="5">
                    <Button
                        type="submit"
                        className="btn-block" 
                        disabled={isProcessing}  
                    >
                        {isProcessing? "Please wait..." : "Login"}
                    </Button>
                </Col>
            </Form.Group>
        </Form>        
    )
}

export default AdminPage;