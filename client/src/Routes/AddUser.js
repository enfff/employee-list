import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form } from "react-bootstrap"

// const LoginSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, "At least two characters needed")
//         .required("Name is required"),
//     company: Yup.string()
//         .min(2, "At least two characters needed")
//         .required("Name is required"),
//     bio: Yup.string()
//         .required("Name is required"),
//     lat: Yup.number()
//         .moreThan(-90)
//         .lessThan(+90)
//         .required("Name is required"),
//     lng: Yup.number()
//         .moreThan(-180)
//         .moreThan(+180, "It needs")
//         .required("Name is required"),
// });

const AddUser = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label className="m-2">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Melon Musk"
                    />
                </Form.Group>

                <Form.Group controlId="formBio">
                    <Form.Label className="m-2">Bio</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        name="bio"
                        placeholder="Spent most of my youth underground, hoping I would florish someday - and now there I am, shining proudly under the sun"
                    />
                </Form.Group>

                <Form.Group controlId="formCompany">
                    <Form.Label className="m-2">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="Company"
                        placeholder="SpaceX"
                    />
                </Form.Group>

                <Form.Group controlId="formGeo">
                    <Row>
                        <Col xs="12" lg="6" className="mt-2">
                            <Form.Label className="m-2">Latitude</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="-25.716667"
                                step="0.00001"
                                min="-90"
                                max="90"
                            />
                        </Col>
                        <Col xs="12" lg="6" className="mt-2">
                            <Form.Label className="m-2">Longitude</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="28.283333"
                                step="0.00001"
                                min="-180"
                                max="180"
                            />
                        </Col>
                    </Row>
                </Form.Group>



            </Form>
        </Container>
    );
}

export default AddUser;
