import React from 'react';
import Logo from '../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Order from '../components/orderItem/Order';

const UserPanel = () => {
    const navigate = useNavigate()
    return (
        <div className='wrapperAdmin'>
        <Logo/>
        <div className='orderList'>
            <ul>
                    <>
                <Order></Order>
                    </>

            </ul>

        </div>
            <button onClick={()=>navigate("/addOrder")} className={"admin"}>Добавить заказ</button>
    </div>
    );
};

export default UserPanel;