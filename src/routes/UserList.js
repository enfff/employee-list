import { Card } from "react-bootstrap";

const UserList = ({users}) => {
    return (

        <div>
            {users.map(user => {
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{user.id}</Card.Title>
                        <Card.Text>{user.company.name}</Card.Text>
                        <Card.Text>{user.company.catchPhrase}</Card.Text>
                    </Card.Body>
                </Card>
            })}
        </div>
    );
}
 
export default UserList;