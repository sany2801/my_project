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
        console.log()
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
       <PopapModal active={modalActive} setActive={setModalActive}>
            <h2>{data.name}</h2>
            <h4>{data.adres}</h4>
            <p>{data.geometry.coordinates[0]}</p>
            <p>{data.geometry.coordinates[1]}</p>
            <Map center={[data.geometry.coordinates[0], data.geometry.coordinates[1]]} zoom={100} draw={false}></Map>
        </PopapModal>
        </div>
            </>
    );
};

export default RestItem;