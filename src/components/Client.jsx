import React from 'react';
import Email from './Email';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Client = (props) => {
  const { firstName, lastName , avatar , phoneNumber, job} = props.data;

  return (
   
     <Col>
      <Card style={{ width: '18rem' }} className="mx-auto my-3">
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Text>{job}</Card.Text>
          <Button variant="primary" href={"tel:"+phoneNumber} className="mr-2">Appeler</Button>
          < Email EmaillastName = {lastName} EmailfirstName = {firstName}/>
        </Card.Body>
      </Card>
    </Col>
  
  );
};

export default Client;