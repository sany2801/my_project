import React from 'react';
import "./style.css"
// import Map
const Order = ({numberOrder, name, phone, adres, sumOrder, payment, coment, timeOrder}) => {
    return (
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

    );
};

export default Order;