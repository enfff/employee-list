import { MapContainer, TileLayer } from 'react-leaflet'

import "../Components/map.css"

import useFetch from '../Helpers/useFetch';
import Markers from '../Components/Markers';

const Map = () => {

    const { data: users, isPending, error } = useFetch('http://localhost:3005/users/');

    return (
        <div className="map">

            <MapContainer
                center={[41.8933203, 12.4829321]}
                zoom="6"
                scrollWheelZoom={true}
                zoomControl={false}
                doubleClickZoom={false}
                maxZoom="15"
                minZoom="3"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            
                <div>{!isPending && !error && users && <Markers users={users} />}</div>

                
            </MapContainer>
        </div>
    );
}
 
export default Map;