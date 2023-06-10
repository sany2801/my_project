import React from 'react';
import { Form } from 'react-router-dom';
import Map from '../components/map/map';
import OrderForm from '../components/adminForm/OrderForm';
const AddOrder = () => {        
    return(
       <div className='wrapper'>
            <div className='formWraper'>
                <OrderForm></OrderForm>
            </div>
            <Map center={[55.75396, 37.620393]} zoom={11}/>
        </div>
    );
};

export default AddOrder;