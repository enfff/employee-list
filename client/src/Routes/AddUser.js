import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap"


const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be longer than two characters")
        .required("Required field"),
    company: Yup.string()
        .min(2, "Must be longer than two characters")
        .required("Required field"),
    bio: Yup.string()
        .min(10, "Come on, tell us something more about yourself")
        .required("Required field"),
    lat: Yup.number()
        .moreThan(-90, 'Must be a number between -90 and +90')
        .lessThan(+90, 'Must be a number between -90 and +90')
        .required('Must be a number between -90 and +90'),
    lng: Yup.number()
        .moreThan(-180, 'Must be a number between -180 and +180')
        .lessThan(+180, 'Must be a number between -180 and +180')
        .required('Must be a number between -180 and +180'),
});

const fixJSON = ({ name, bio, lat, lng, company }) => {
    // Quick and dirty fix for the the badly formatted values
    const fixedJSON = {
        name: name,
        bio: bio,
        company: company,
        geo: [
            lat,
            lng
        ]
    }
    return fixedJSON;
}



const AddUser = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <Formik
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);

                    const fixedJSON = fixJSON(values);

                    fetch('http://localhost:3005/users', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(fixedJSON)
                    }).then(()=>{

                        resetForm();
                        setSubmitting(false);
                        setShowModal(true);

                    }).catch((err)=>{
                        console.log(err)
                    })

                }}
                validationSchema={formSchema}
                initialValues={{
                    name: '',
                    bio: '',
                    company: '',
                    lat: '',
                    lng: ''
                }}
            >

                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur, // this handles the "touched" object
                }) => (
                    <Form noValidate>
                        <Form.Group controlId="formName">
                            <Form.Label className="m-2">Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Melon Musk"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={(touched.name && errors.name)}
                                isValid={touched.name && !errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid" />
                        </Form.Group>

                        <Form.Group controlId="formBio">
                            <Form.Label className="m-2">Bio</Form.Label>
                            <Form.Control
                                as="textarea"
                                type="text"
                                name="bio"
                                placeholder="Spent most of my youth underground, hoping I would florish someday - and now there I am, shining proudly under the sun"
                                value={values.bio}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.bio && errors.bio}
                                isValid={touched.bio && !errors.bio}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.bio}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid" />
                        </Form.Group>

                        <Form.Group controlId="formCompany">
                            <Form.Label className="m-2">Company</Form.Label>
                            <Form.Control
                                type="text"
                                name="company"
                                placeholder="SpaceX"
                                value={values.company}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={touched.company && errors.company}
                                isValid={touched.company && !errors.company}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.company}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid" />
                        </Form.Group>

                        <Form.Group controlId="formGeo">
                            <Row>
                                <Col xs="12" lg="6" className="mt-2">
                                    <Form.Label className="m-2">Latitude</Form.Label>
                                    <Form.Control
                                        name="lat"
                                        type="number"
                                        placeholder="-25.716667"
                                        step="0.00001"
                                        min="-90"
                                        max="90"
                                        value={values.lat}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.lat && errors.lat}
                                        isValid={touched.lat && !errors.lat}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lat}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid" />
                                </Col>
                                <Col xs="12" lg="6" className="mt-2">
                                    <Form.Label className="m-2">Longitude</Form.Label>
                                    <Form.Control
                                        name="lng"
                                        type="number"
                                        placeholder="28.283333"
                                        step="0.00001"
                                        min="-180"
                                        max="180"
                                        value={values.lng}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.lng && errors.lng}
                                        isValid={touched.lng && !errors.lng}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lng}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Row>
                            <Button
                                className="m-3"
                                variant="primary"
                                type="submit"
                                as={Col}
                                onClick={(e) => {
                                    handleSubmit(e)
                                    console.log({ values })
                                    console.log({ errors })
                                    console.log({ touched })
                                }}
                            >
                                Submit
                            </Button>
                        </Row>
                    </Form>
                )}


            </Formik>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User added successfully!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}

export default AddUser;
