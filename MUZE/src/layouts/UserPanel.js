import React, { useContext } from 'react';
import Logo from '../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Order from '../components/orderItem/Order';
import { useSelector } from 'react-redux';
const UserPanel = () => {
    const navigate = useNavigate()
    const order_list = useSelector(state=>state.orderlist)
    const adresOrder = useSelector(state =>state.route)
    const addOrder = ()=>{
        navigate('/addOrder')

    }
    console.log(adresOrder[0])
    console.log(order_list)
    return (
        <div className='wrapperAdmin'>
        <Logo/>
        <div className='orderList'>
            <ul>
                {order_list.map(item=>(
                    <Order numberOrder={item.numberOrder} sumOrder={item.sumOrder} adresOrder={item.adress}></Order>
            ))}

            </ul>

        </div>
            <button onClick={()=>addOrder()} className={"admin"}>Добавить заказ</button>
    </div>
    );
};

export default UserPanel;