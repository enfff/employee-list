import { Card, Row, Container } from "react-bootstrap";

const UserList = ({users}) => {
    
    return (

        <Container>
            <Row className="justify-content-center p-5" xs={12}>
                {users.map(user => {
                    return(
                        <Card key={user.id} style={{ width: '20rem', margin: '10px' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{user.id}</Card.Title>
                                <h5>{user.company.name}</h5>
                                <Card.Text>{user.company.catchPhrase}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    );
}
 
export default UserList;