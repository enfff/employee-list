import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import "../misc/map.css"

import useFetch from '../scripts/useFetch';
// import Markers from '../components/Markers';

const Map = () => {

    const { data: users, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/users/');

    return (
        <div className="map">

            <MapContainer center={[41.8933203, 12.4829321]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            
                {/* <div>{!isPending && !error && users && <Markers users={users} />}</div> */}

                
            </MapContainer>
        </div>
    );
}
 
export default Map;