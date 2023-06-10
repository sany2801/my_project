import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, Polygon, Rectangle, useMapEvents, FeatureGroup, Tooltip} from 'react-leaflet'
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import "./style.css"
import restData from "./data.json"
import pointInPolygon from "point-in-polygon"

import { EditControl, DrawOptions, MarkerOptions } from 'react-leaflet-draw';
import L, { polyline } from "leaflet"
import axios from 'axios';
import { Route } from 'react-router-dom';

const Map = ({center, zoom, draw}) => {
  const find = useSelector(state=> state.markerPosition)
  const routeAdres = useSelector(state=>state.route)
  
  const dispatch = useDispatch()
  
  const GetIcon = (_iconSize, photo)=>{ // иконка маркера
    return L.icon({
      iconUrl: require("../../images/Без названия.png"),
      iconSize: [_iconSize, _iconSize ]
    })
  }

    // const startPoint = useSelector (state => state.route)
    // console.log(startPoint)

    const [route, setRoute] = useState([]);
    const drivingTraffic = "driving-traffic"
    console.log(routeAdres[0].geostart)
    console.log(routeAdres[0].lat)

    // const end = [55.75884664209886, 37.61398022599031]
    // const [end, setEnd] = useState([])
    const urlAdres = `https://api.mapbox.com/directions/v5/mapbox/${drivingTraffic}/${routeAdres[0].geostart[1]}%2C${routeAdres[0].geostart[0]}%3B${routeAdres[0].lng}%2C${routeAdres[0].lat}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiZm94eTAwMCIsImEiOiJjbGlqNzZpc3cwNWhsM3RzNXlwM3Y5aXoyIn0.vSAfL33yRj5k6VbYfInSvA`

    useEffect(() => {
      const fetchResult =  async () => {
        const res = await axios(urlAdres);
        // console.log(res)
        res.data.routes[0].geometry.coordinates.map(item=>{
            item.reverse()
          })
          setRoute(res.data.routes[0].geometry.coordinates);
      };
      fetchResult()
      // console.log(startPoint[0].addresStart)
    },[routeAdres]);

    
    


    // console.log(route)


  const LocationMarker = ()=>{
    const [position, setPosition] = useState(find[0])
    console.log(position)
    const map = useMapEvents({
      locationfound(e) {
        setPosition([find[0].lat, find[0].lng])
        map.flyTo([find[0].lat,find[0].lng])
      },
    })
    useEffect(()=>{
      map.locate()
    },[find])

    return position === null ? null : (
      <Marker position={position}
        icon={GetIcon(60,60)}
      >
        <Popup>
          <h1>{find[0].value}</h1>
          </Popup>
      </Marker>
    )
  }

  const routeOption = {
      color: "black",
      weight: 6,
      opacity: 21,
      fillColor: "red"
    }
    const zoneOption ={
      color: "red",
      weight: 3,
      opacity: 1,
      fillColor: "black"
    }

    const reslist = useSelector(state => state.reslist)


    const _onCreate = e =>{
      console.log(e)
      if(e.layerType === "marker"){
        console.log("marker")
        console.log(e.layer._latlng.lat, e.layer._latlng.lng )
      }
      else if(e.layerType === "polygon"){
        
        e.layer._latlngs[0].map(item=>{
          console.log(item.lat, item.lng)
        })
      }

    }
    const _onDeleted = (e)=>{
      console.log(e)
    }  



    const _onEdit = (e)=>{
      console.log(e.layers._layers)
      console.log(e)
    }
    
    return(
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
        <FeatureGroup >
          <EditControl style={{display:"none"}} className="active"
            position='topleft' 
            onCreated={_onCreate} 
            onDeleted={_onDeleted}
            onEdited={_onEdit}
            draw={{
              rectangle: false,
              polyline: false,
              circle: false,
              circlemarker: false,
              marker: true,
              polygon: true,
            }}
            /> 
            {reslist.map(key=>(
                <Marker 
                  icon={GetIcon(40, 40)}
                  position={[key.geometry.coordinates[0], key.geometry.coordinates[1]]}>
                <Polygon pathOptions={zoneOption} positions={key.area}>
                  <Tooltip className='hover' direction='center' opacity={1}>
                      <h3 >{key.adres}</h3>
                  </Tooltip>
                </Polygon>
                <Popup>
                  <h2>
                    {key.name}
                  </h2>
                  <p>{key.adres}</p>
                  <img alt='img' src={key.img}></img>
                  <p>{key.geometry.coordinates[0]}</p> 
                  <p>{key.geometry.coordinates[1]}</p>
                </Popup>
      <Polyline pathOptions={routeOption} positions={route} />
      </Marker>
  ))              
}                            
</FeatureGroup>
  <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        
<LocationMarker/>
</MapContainer>

)
};

export default Map; 