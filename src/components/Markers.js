import { Marker } from 'react-leaflet'


const Markers = ( {users} ) => {

    return (
        users.map(user => {
            // console.log(user.geo.lat, user.geo.lng);
            return <Marker position={[user.geo.lat, user.geo.lng]} />
        })
    );
}
export default Markers;