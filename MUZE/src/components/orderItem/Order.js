import React from 'react';
import "./style.css"
import { Popup } from 'react-leaflet';
import PopapModal from '../popapModal/PopapModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import Map
const Order = ({numberOrder, name, phone, adres, sumOrder, payment, coment, timeOrder}) => {
    const [modalActive, setModalActive] = useState(false)
    const allOrderValue = useSelector(state => state.allOrderValue)
    
    const setValueOrder = (e)=>{
        setModalActive(true)
        console.log(e)
    }

    return (
        <>
    <div className="row itemOrder">
        <div className="cell number">
            {numberOrder}
        </div>
        <div className="cell time">
            {timeOrder}
        </div>
        <div className="cell name">
            {name}
        </div>
        <div className="cell phone">
            {phone}
        </div> 
        <div className="cell adres">
            {adres}
        </div>
        <div className="cell sumOrder">
            {sumOrder}
        </div>
        <div className="cell payment">
            {payment}
        </div>
        <div className="cell coment">
            {coment}
        </div>

    </div>
        <button style={{width:"100%"}} onClick={()=>setValueOrder()}> Подробнее</button>

            <PopapModal active={modalActive} setActive={setModalActive}>
            </PopapModal>
        </>
        
    );
};

export default Order;