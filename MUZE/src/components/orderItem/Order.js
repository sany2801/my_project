import React from 'react';
import "./style.css"
// import Map
const Order = ({numberOrder, sumOrder, adresOrder}) => {
    return (
        <div className='order'>
            <h2>Номер заказа:</h2>
            <h3>{"numberOrder"}</h3>
            <h2>Сумма заказа:</h2>
            <h3>{"sumOrder"}</h3>
            <h2>Адрес доставки:</h2>
            <h4>{"adresOrderadresOrderadresOrbvdfbbngsdfrnbsgfr dfbgfrd deradresOrderadresOrder"}</h4>
       </div>

    );
};

export default Order;