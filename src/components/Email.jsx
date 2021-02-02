import Button from 'react-bootstrap/Button';

const Email = (props) => (
    <Button variant="primary" href={`mailto:${props.EmaillastName.toLowerCase()}.${props.EmailfirstName.toLowerCase()}@gmail.com`}>Envoyez un Mail</Button>
);

export default Email;