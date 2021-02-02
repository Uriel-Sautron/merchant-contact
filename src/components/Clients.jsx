import React from 'react';
import faker from 'faker';
import Client from './Client'
import { Row } from 'react-bootstrap';

const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    avatar: faker.image.image(),
    job: faker.name.jobTitle(),
  }));

  console.log(clientsList);

  return (
    <Row >
      {clientsList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
      ))}
    </Row>
  );

};

export default Clients;