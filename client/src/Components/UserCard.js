import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Image from "react-bootstrap/Image"

import { useState } from "react"

import usericon from "../Assets/usericon.png"

const UserCard = ({ user }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Card key={user.id} style={{ width: '20rem', margin: '10px' }} >
                <Card.Img variant="top" src={usericon} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <h6>{user._id}</h6>
                    <h5>{user.company}</h5>
                    <Card.Text>{user.bio.substring(0, 10) + ' ...'}</Card.Text>
                    <Button size="sm" variant="outline-secondary" onClick={() => setShowModal(true)}>Read More</Button>
                </Card.Body>
            </Card>

            <Modal
                show={showModal}
                keyboard={true}
                centered
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{user.name}</Modal.Title>
                </Modal.Header>
                <Image className="m-1" src={usericon}></Image>
                <Modal.Body>{user.company}</Modal.Body>
                <Modal.Body>{user.bio}</Modal.Body>
            </Modal>
        </>
    );
}

export default UserCard;