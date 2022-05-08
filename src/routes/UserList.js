import { Card, Row, Container } from "react-bootstrap";

const UserList = ({users}) => {
    console.log(users);
    
    return (

        <Container>
            <Row className="justify-content-center" xs={12}>
                {users.map(user => {
                    return(
                        <Card key={user.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{user.id}</Card.Title>
                                <Card.Text>{user.company.name}</Card.Text>
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