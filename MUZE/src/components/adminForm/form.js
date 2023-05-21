import "./form.css"
import { AddressSuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import restData from "../map/data"
import Map from "../map/map";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import { useState, useCallback} from "react"

var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "c8bc0f0128c7944afa9f72fcea2fd8f13793ffd6";
var query = 'C';

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
}

fetch(url, options)
.then(response => response.json())
.then(result => console.log(result.suggestions))
.catch(error => console.log("error", error));
const Form = ()=>{
    const [nameObject, addNameObject] = useState('')
    const [city, addCity] = useState('')
    const [value, setValue] = useState();
    

    
        const Update = (e)=>{
            console.log(value.data.geo_lat, value.data.geo_lon)
            console.log(restData.restList)
            restData.restList.push(
                    {
                      "adres": nameObject,
                      "geometry": {
                          "id": new Date(),
                          "type": "Point",
                          "coordinates": [+value.data.geo_lat, +value.data.geo_lon]
                      }
                  }
                  )
                
        }
        Map()
  
  
    return(
            <div className="formAdmin">
                <form className="form">

                    <label for="nameObject">Название объекта</label>
                    <input id="nameObject" name="nameObject" value={nameObject} onChange={(event)=>addNameObject(event.target.value)}></input>


                    <label for="adres">Адрес объекта</label>
                    <AddressSuggestions id="adres" placeholder="Адрес" token={token} value={value} onChange={setValue}/>

                    <label  for="photo">Фото объекта</label>
                    <label className="inputphoto" for="photo"></label>
                    <input id="photo" type={'file'} accept="image" name="photo"></input>

    
                    <label  for="delivery">Достава</label>
                    <div className="delivery">
                        <input id="true" type="radio" name="delivery" ></input>
                        <label for="true">Есть</label>
                        <input id="false" type="radio" name="delivery" ></input>
                        <label for="false">Нет</label>
                    </div>
               
                    
                  

                    <button type="submit" onClick={(e)=>Update()}> Сахранить</button>
                </form>
                <button onClick={()=>Update()}>найти</button>
                

            </div>
        )
    }
export default Form