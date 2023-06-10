import { useState } from 'react';
import { AddressSuggestions} from 'react-dadata';
import { useDispatch, useSelector } from 'react-redux';
import "./form.css"
import MaskedInput from "react-input-mask"
// import Map from '../map/map';
// import Button from '../Button/Button';
import pointInPolygon from 'point-in-polygon';
import resData from "..//map/data.json" 
import { type } from '@testing-library/user-event/dist/type';
const OrderForm = () => {
    const [firstNameValue, setFirstNameValue] = useState("")
    const [lastNameValue, setLastNameValue] = useState("")
    const [phoneValue, setphoneValue] = useState("")
    const [adresValue, setAdresValue] = useState();
    const [payment, setPayment] = useState(false)
    const [comentOrderValue, setComentOrder] = useState('')
    const [addresStart, setAdressStart] = useState()
    
    //////////////////////////////////
    
    //    console.log(pointInPolygon([55.687774323622506,37.47449177559611],resData.restList[0].area))
    const dispatch = useDispatch()
    
    
    // addRout(55.72517666621405, 37.5670137568943)
   
    
    const endPoint = useSelector(state => state.route)
    // console.log(endPoint)
    const find = (e)=>{
        setAdresValue(e.value)
        console.log(+e.data.geo_lat, +e.data.geo_lon)
        // addRout(+e.data.geo_lat, +e.data.geo_lon)
        for(let i = 0; i < resData.restList.length;i++){
            if(pointInPolygon([+e.data.geo_lat, +e.data.geo_lon],resData.restList[i].area)){
                dispatch(
                    {type: "ADD_ROUTE",
                    payload:{
                        "lat": +e.data.geo_lat,
                        "lng": +e.data.geo_lon,
                        "value": e.value,
                        "adresStart": resData.restList[i].adres,
                        "geostart": resData.restList[i].geometry.coordinates
                    }
                }
                )
                dispatch(
                    {type:"FIND",
                    payload:{
                        "lat":+e.data.geo_lat,
                        "lng": +e.data.geo_lon,
                        "value": e.value, 
                    }
                }
                )
            }
        }           
    }

    const onOptionChange = e => {
        console.log(e.target.value)
        if(e.target.id === "true"){
            setPayment(true)
        }else{
            setPayment(false)
        }

    }


    // const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "c8bc0f0128c7944afa9f72fcea2fd8f13793ffd6";

    return (
        <div className="formAdmin">

            <form className='form'>
                <label>Данные клиента</label>

                <input id='inputFirstName' onChange={(e)=>setFirstNameValue(e.target.value)} type='text' placeholder='Имя' value={firstNameValue} required></input>
                <input id='inputLastName' onChange={(e)=>setLastNameValue(e.target.value)} type='text' placeholder='Фамилия' value={lastNameValue}required></input>
                <MaskedInput id='inputphoneValue' onChange={(e)=>setphoneValue(e.target.value)} mask={"+375 (99)999-99-99"} placeholder='Телефон' value={phoneValue} required></MaskedInput>
                <label>Адрес</label>
                
                <AddressSuggestions id="adres" token={token} value={adresValue} onChange={(e)=>find(e)}/>

                <label>Способ оплаты</label>
                    <div className="payment">
                        <input  id="true"
                                value="Картой"
                                type="radio" 
                                name="payment" 
                                checked={payment===true} 
                                onChange={onOptionChange}
                        ></input>
                        <label for="true">Картой</label>
                        <input  id="false" 
                                value="Наличными"
                                type="radio" 
                                name="payment" 
                                checked={payment===false}
                                onChange={onOptionChange}
                                ></input>
                        <label for="false">Наличными</label>
                    </div>
                        <label for="comentOrder">Коментарий к заказу</label>
                        <textarea id='comentOrder' value={comentOrderValue} onChange={(e)=>setComentOrder(e.target.value)} style={{height:'200px', fontSize:'25px'}}></textarea>


                    <button type='submit'>Далее</button>
            </form>
        </div>

    );
};

export default OrderForm;