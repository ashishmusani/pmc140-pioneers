import React from 'react';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const QuestionsTab = (props) => {
    const questions = props.questions;
    return (
        <Container id="questionsTab" >
            <div>
                <h2>Questions</h2>
                Total Questions = {questions.length}
            </div>
            <Table bordered hover variant="light">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((attendee) => (
                    <tr key={attendee.email}>
                        <td>{attendee.question}</td>
                        <td>{attendee.name}</td>
                        <td>{attendee.email}</td>
                    </tr>
                ))}
            </tbody>
            </Table>            
        </Container>        
    )
}

export default QuestionsTab;