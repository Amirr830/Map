import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function TaxiSearch(){
    const [startingPoint , setStartingPoint] = useState('');
    const[destination , setDestination] = useState('');
}


const handleStartingPointChange = (e) => {
    setStartingPoint (e.target.value);

}


const handleDestinationChange = (e) => {
    setDestination (e.target.value);

}

const handleSearch = () => {
    document.write("searching for taxi from" , startingPoint , "to" , destination);
};






export default function Search() {
  return (
    <div>
        <div class=" text-center" >
  <div class="row">
    <div class="col-md-9 col-9 bg-danger">
    <MapContainer center={[36.2981, 59.6059]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[36.2981, 59.6059]}>
        <Popup>
          مشهد
        </Popup>
      </Marker>
    </MapContainer>


    </div>
    <div class="col-md-3 col-3 bg-success">

        <input type="text"  ></input> 


    </div>
    </div>
    </div>
    </div>
  )
}
