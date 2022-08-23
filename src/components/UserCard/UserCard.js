import React from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

const UserCard = ({name, photoSrc, patientID, age}) => {

    const navigate = useNavigate();

    const handleClick = (patientID, photoSrc) => {
        navigate(`/patient/${patientID}?photo=${photoSrc}`)
    }

    return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={photoSrc}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Patient ID: {patientID}</Card.Text>
        <Card.Text>Age: {age} years</Card.Text>
        <Button variant="info" onClick={handleClick.bind(this, patientID, photoSrc)} >View profile</Button>
      </Card.Body>
    </Card>
    );
}

export default UserCard;
