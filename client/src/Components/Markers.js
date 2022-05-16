import { Marker, Popup } from 'react-leaflet'

const Markers = ({ users }) => {

    return (
        users.map(user => {
            return (
                <>
                    <Marker key={user._id} position={user.geo}>
                        <Popup>
                            <h4>{user.name}</h4>
                            <h6>Works for {user.company}</h6>
                            <h6>{user.geo[0]}, {user.geo[1]}</h6>
                        </Popup>
                    </Marker>

                </>
            )



        })
    );
}
export default Markers;