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
                    <Card.Title>#{user.id} - {user.name}</Card.Title>
                    <h5>{user.company.name}</h5>
                    <Card.Text>{user.company.catchPhrase.substring(0, 20) + ' ...'}</Card.Text>
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
                <Modal.Body>{user.company.name}</Modal.Body>
                <Modal.Body>{user.company.catchPhrase}</Modal.Body>
            </Modal>
        </>
    );
}

export default UserCard;