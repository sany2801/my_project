

import React from 'react';
import Map from '../components/map/map';
import ".//style.css"
import Form from '../components/adminForm/form';
const Addrestaran = () => {
    return (
        <div className='wrapper'>
            <div className='formWraper'>
                <Form/>
            </div>
            <Map/>
        </div>
    );
};

export default Addrestaran;