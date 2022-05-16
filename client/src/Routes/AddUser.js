import { Col, Container, InputGroup, Button, Form } from "react-bootstrap";
import { useState } from "react";

const AddUser = () => {

    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="justify-content-center mt-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Thomas Milton"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        type="text"
                        placeholder="23yo Designer from San Francisco"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please write a bio.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCompany">
                    <Form.Label>Company</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Don't be evil"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a company.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="validationLat">
                    <Form.Label>Latitude</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">lat</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="1.234567"
                            step="0.000001"
                            min="-90"
                            max="90"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a geo location.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="validationLng">
                    <Form.Label>Longitude</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">lng</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="1.234567"
                            step="0.000001"
                            min="-180"
                            max="180"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a geo location.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Button block="true" type="submit" className="mt-5">Submit form</Button>
            </Form>
        </Container>
    );
}

export default AddUser;