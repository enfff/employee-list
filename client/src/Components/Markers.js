import { Marker } from 'react-leaflet'


const Markers = ( {users} ) => {

    return (
        users.map(user => {
            // console.log(user);
            return <Marker key={user._id} position={user.geo} />
        })
    );
}
export default Markers;