import { Row, Container,  } from "react-bootstrap"
import UserCard from "../Components/UserCard"

const UserList = ( {users} ) => {

    return (
        <Container>
            <Row className="justify-content-center p-5" xs={12}>
                {users.map(user => {
                    return(
                        <UserCard key={user.id} user={user}/>
                    )
                })}
            </Row>
        </Container>
    );
}
 
export default UserList;