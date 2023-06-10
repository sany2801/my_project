import "./form.css"
import { AddressSuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { useMap, useMapEvents } from "react-leaflet";
import PopapModal from "../popapModal/PopapModal";


const Form = ()=>{
    const [nameObject,addNameObject] = useState('')
    const [adresValue, setAdresValue] = useState("");
    const [img, setImg] = useState("https://png.pngtree.com/png-vector/20210312/ourmid/pngtree-outline-camera-icon-png-image_3047239.jpg");
    const [delivery, setDelivery] = useState(false)
    console.log(adresValue)



    const dispatch = useDispatch()

 
        const addRess = (e)=>{
            e.preventDefault()
            addNameObject('')
            setAdresValue('')
            setImg("https://png.pngtree.com/png-vector/20210312/ourmid/pngtree-outline-camera-icon-png-image_3047239.jpg")
            
            dispatch(
                {type:"ADD_RES", 
                    payload:{
                        "name": nameObject,
                        "adres":adresValue.value,
                        "img": img,
                        "delivery": delivery, 
                        "area":[],
                        "geometry": {
                            "id": new Date(),
                            "type": "Point",
                            "coordinates": [+adresValue.data.geo_lat, +adresValue.data.geo_lon]
                        },
                    }
                })
            }
            
        const find = (e)=>{
                setAdresValue(e)
                console.log(e)
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
                    
    
        function fileHandle(e) {// картинка   
        if (e.target.files.length) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function () {
                setImg(reader.result)
            }
        }
    }

    const onOptionChange = e => {    // Чекбокс
        if(e.target.value === "true"){
            setDelivery(true)
        }else{
            setDelivery(false)
        }
    }

    // Модальное окно
    const [modalActive, setModalActive] = useState(false)
    const editZoneDelivery = (e)=>{
        e.preventDefault()
        setModalActive(true)
        
    }

    return(
        <div className="formAdmin">
                <form className="form">

                    <label for="nameObject">Название объекта</label>
                    <input id="nameObject" name="nameObject" value={nameObject} onChange={(event)=>addNameObject(event.target.value)}></input>


                    <label for="adres">Адрес объекта</label>
                    <div className="inputAdress">
                    <AddressSuggestions id="adres" token="c8bc0f0128c7944afa9f72fcea2fd8f13793ffd6" onChange={(e)=>find(e)}/>
                    </div>


                    <label  for="photo">Фото объекта</label>
                    <label className="inputphoto" for="photo" style={{backgroundImage:`url(${img})`}}></label>
                    <input  onChange={(e)=>fileHandle(e)} id="photo" type={'file'}  accept="image" name="photo"></input>
    
                    <label  for="delivery">Достава</label>
                    <div className="delivery">
                        <input  id="true"
                                value={true}
                                type="radio" 
                                name="delivery" 
                                checked={delivery===true} 
                                onChange={onOptionChange}
                        ></input>
                        <label for="true">Есть</label>
                        <input  id="false" 
                                value="false"
                                type="radio" 
                                name="delivery" 
                                checked={delivery===false}
                                onChange={onOptionChange}
                                ></input>
                        <label for="false">Нет</label>
                    </div>
                        <Button active={!delivery} onClick={(e)=>editZoneDelivery(e)}>Настроить зону доставки</Button>
               
                    
                  

                    <Button active={!adresValue} onClick={(e)=>addRess(e)}> Сахранить</Button>
                </form>
                
                <PopapModal active={modalActive} setActive={setModalActive}>
                    <h2>sdvgds</h2>
                </PopapModal>
            </div>
            
        )
    }
export default Form