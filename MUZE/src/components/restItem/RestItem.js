import React from 'react';
import PopapModal from '../popapModal/PopapModal';
import Map from '../map/map';
import { useState } from 'react';
const RestItem = ({data}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className='restaranOption'>
            <h2 className='restaranName'>{data.name}</h2>
            <h3 className='adresTittle'>Адрес:</h3>
            <p className='adresValue'>{data.adres}</p>
            <img src={data.img}></img>
            <h3 className='tittleDel'>Зона доставки:</h3>
            <p className='valueDel'>р-н Первомайский</p>
            <button onClick={()=>setModalActive(true)}>Подробнее</button>
            <PopapModal active={modalActive} setActive={setModalActive}>
                    <h2>{data.adres}</h2>
                    <Map center={[data.geometry.coordinates[0], data.geometry.coordinates[1]]}></Map>
            </PopapModal> 
        </div>
    );
};

export default RestItem;