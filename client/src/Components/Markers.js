import { Marker, Popup } from 'react-leaflet'
import { Container } from "react-bootstrap"

const Markers = ({ users }) => {

    return (
        users.map(user => {
            return (
                <Container key={user._id}>
                    <Marker position={user.geo}>
                        <Popup>
                            <h4>{user.name}</h4>
                            <h6>Works for {user.company}</h6>
                            <h6>{user.geo[0]}, {user.geo[1]}</h6>
                        </Popup>
                    </Marker>

                </Container>
            )



        })
    );
}
export default Markers;