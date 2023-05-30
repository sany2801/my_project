import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, Polygon, Rectangle, useMapEvents, FeatureGroup} from 'react-leaflet'
import { useSelector } from "react-redux";
import { useState } from 'react';
import "./style.css"
import { EditControl } from 'react-leaflet-draw';


const Map = ({center, zoom}) => {
  const find = useSelector(state=> state.markerPosition) 

  const LocationMarker = ()=>{

    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        console.log("clik")
        map.locate()
      },
      locationfound(e) {
        console.log(find[0])
        setPosition(find[0])
        map.flyTo(find[0], zoom=16)
      },
    })

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

    const limeOptions = {stroke: "black"}


    const reslist = useSelector(state => state.reslist1)
    console.log(reslist)

  


    const _onCreate = e =>{
      e.layer._latlngs[0].map(item=>{
        console.log(item.lat, item.lng)
      })
    }
    const _onDeleted = (e)=>{
      console.log(e)
    }  
    const _onEdit = (e)=>{
      console.log(e)
    }
    return(


      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
        <FeatureGroup>
          <EditControl 
            position='topright' 
            onCreated={_onCreate} 
            onDeleted={_onDeleted}
            onEdited={_onEdit}
            draw={{
              rectangle: false,
              polyline: false,
              circle: false,
              circlemarker: false,
              marker: false,
              
            }}
            />
        </FeatureGroup>


            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {reslist.map(key=>(
              <Marker   position={[key.geometry.coordinates[0], key.geometry.coordinates[1]]}>
              <Polygon pathOptions={limeOptions} positions={key.area}></Polygon>
    <Popup>
      <h2>
        {key.name}
      </h2>
      <p>{key.adres}</p>
      <img src={key.img}></img>
    </Popup>
  </Marker>
))

}
<LocationMarker/>
</MapContainer>

  )
};

export default Map; 