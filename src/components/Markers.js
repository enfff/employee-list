import { Marker } from 'react-leaflet'


const Markers = ( {users} ) => {

    return (
        users.map(user => {
            // console.log(user.geo.lat, user.geo.lng);
            console.log(user);
            return <Marker key={user.id} position={user.address.geo} />
        })
    );
}
export default Markers;