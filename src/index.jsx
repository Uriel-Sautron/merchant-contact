import React from 'react';
import ReactDOM from 'react-dom';
import Clients from './components/Clients';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => (
  <div>
    <h1>Hello World</h1>
    <Container fluid>< Clients /></Container>
  </div>
);
    

ReactDOM.render(<App />, document.getElementById('root'));