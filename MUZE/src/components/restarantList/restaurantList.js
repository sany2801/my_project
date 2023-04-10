import { useCallback, useState } from "react"
import Button from "../Button/Button"

const Restaurant = ({name, city, street, numHouse, timeFrom, timeTo, delivery}) =>{
    
    return(
        <div className="prevew">
            <h2>Название {name}</h2>
            Адрес
            <p>Город {city}</p>
            <p>Улица {street}</p>
            <p>№ Дома{numHouse}</p>
            Время работы с <span>{timeFrom}</span> до <span>{timeTo}</span>
            <p>Достава {delivery}</p>
        </div>
    )
}
 
export default Restaurant;