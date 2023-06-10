import React from 'react';
import PopapModal from '../popapModal/PopapModal';
import Map from '../map/map';
import Button from '../Button/Button';
import { useState } from 'react';

const RestItem = ({data}) => {
    const [modalActive, setModalActive] = useState(false)
    const infoRest = ()=>{
        console.log('click')
        setModalActive(true)
    }
    return (
    <>
         
        <div className='restaranOption'>
            <h2 className='restaranName'>{data.name}</h2>
            <h3 className='adresTittle'>Адрес:</h3>
            <p className='adresValue'>{data.adres}</p>
            <img alt='img' src={data.img}></img>
            <h3 className='tittleDel'>Зона доставки:</h3>
            <p className='valueDel'>р-н Первомайский</p>
            <button onClick={()=>infoRest()}>Подробнее</button>
        </div>
       <PopapModal active={modalActive} setActive={setModalActive}>
            <Map center={[data.geometry.coordinates[0], data.geometry.coordinates[1]]} zoom={13} draw={true}></Map>
        </PopapModal>
            </>
    );
};

export default RestItem;