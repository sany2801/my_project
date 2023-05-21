import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import restData from "./data.json"

 
// console.log(restData.restList)

// restData.restList.push(
//   {
//     "adres" : "street 43",
//     "geometry": {
//         "id": 1234,
//         "type": "Point",
//         "coordinates": [55.75396, 37.620393]
//     }
// }
// )


const Map = () => {
    return(
      <MapContainer center={[55.75396, 37.620393]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {restData.restList.map(key=>(
      <Marker   position={[key.geometry.coordinates[0], key.geometry.coordinates[1]]}>
    <Popup>
      <h2>
        {key.adres}
      </h2>
    </Popup>
  </Marker>
  ))
}

</MapContainer>
    )
};

export default Map; 