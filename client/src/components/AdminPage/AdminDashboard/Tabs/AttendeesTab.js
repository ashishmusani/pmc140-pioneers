import React from 'react';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const AttendeesTab = (props) => {
    const attendees = props.attendees;
    return (
        <Container id="attendeesTab" >
            <div>
                <h2>Attendance Report</h2>
                Total attendees = {attendees.length}
            </div>
            <Table bordered hover variant="light">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {attendees.map((attendee) => (
                    <tr key={attendee.attendeeEmail}>
                        <td>{attendee.attendeeName}</td>
                        <td>{attendee.attendeeEmail}</td>
                    </tr>
                ))}
            </tbody>
            </Table>            
        </Container>        
    )
}

export default AttendeesTab;