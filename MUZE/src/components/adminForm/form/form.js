import "./form.css"
import Button from "../../Button/Button"
import Restaurant from "../../restarantList/restaurantList"


import { useState, useCallback} from "react"



const Form = ()=>{
    const [nameObject, addNameObject] = useState('')
    const [city, addCity] = useState('')
    const [street, addStreet] = useState('')
    const [numHouse, addNumHouse] = useState('')
    const [timeFrom, addTimeFrom] = useState('10:00')
    const [timeTo, addTimeTo] = useState('22:30')
    const [delivery, addDelivery] = useState('checked')
    
    const setDelivery = ()=>{
        if(delivery === 'checked'){
            addDelivery('')
        }
        else{
            addDelivery('checked')
        }
    }
    
    const [resList, addResList] = useState([])
    const setResList = useCallback((event)=>{
            event.preventDefault()

            addResList((item)=> [...item,{nameObject,city, street, numHouse, timeFrom, timeTo, delivery}])
            console.log('click')
        })
        
     
    return(
            <div className="formAdmin">
                <form className="form">

                    <label for="nameObject">Название объекта</label>
                    <input id="nameObject" name="nameObject" value={nameObject} onChange={(event)=>addNameObject(event.target.value)}></input>

                    <label for="adres">Адрес объекта</label>
                    <span className="adresInput">
                        <input placeholder="Город" name="city" value={city} onChange={(event)=>addCity(event.target.value)}></input>
                        <input placeholder="Улица" name="street" value={street} onChange={(event)=>addStreet(event.target.value)}></input>
                        <input placeholder="№ Дома" name="numHouse" value={numHouse} onChange={(event)=>addNumHouse(event.target.value)}></input>
                    </span>

                    <label for="time">Время работы
                        <div className="timeInput">
                            <span>с</span>
                            <input id="time" type={"time"} name="timeFrom" value={timeFrom} onChange={(event)=>addTimeFrom(event.target.value)}></input>
                            <span>до</span>
                            <input id="time" type={"time"} name="timeTo" value={timeTo} onChange={(event)=>addTimeTo(event.target.value)}></input>
                        </div>
                    </label>
                    <label for="delivery">Достава</label>
                    <input id="delivery" type="checkbox" name="delivery" checked={delivery} onClick={(event)=>setDelivery(event.target.value)}></input>
                    <label for="photo">Фото объекта</label>
                    <input id="photo" type={'file'} accept="image" name="photo"></input>
                    <button type="submit" onClick={setResList}> Сахранить</button>
                </form>
                <Restaurant name={nameObject} city={city} street={street} numHouse={numHouse} timeFrom={timeFrom} timeTo={timeTo} delivery={delivery}/>
                <div className="wrapperList">
                        <p>Название</p>
                        <p>Город</p>
                        <p>Улица</p>
                        <p>№ Дома</p>
                        <p>Время работы с</p>
                        <p>до</p>
                        <p>Достава</p>
                    </div>
                    {resList.map(item=> 
                <div className="wrapperList">
                    
                    <p>{item.nameObject}</p>
                    <p>{item.city}</p>
                    <p>{item.street}</p>
                    <p>{item.numHouse}</p>
                    <p>{item.timeFrom}</p>
                    <p>{item.timeTo}</p>
                    <p>{item.delivery}</p>
                </div>
                )}


            </div>
        )
    }
export default Form