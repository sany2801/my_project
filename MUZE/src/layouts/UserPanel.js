import React, { useContext } from 'react';
import Logo from '../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Order from '../components/orderItem/Order';
import { useSelector } from 'react-redux';
const UserPanel = () => {
    const navigate = useNavigate()
    const orderList = useSelector(state=>state.orderList)
    const addOrder = ()=>{
        navigate('/addOrder')

    }
    console.log(orderList)
    return (
        <div className='wrapperAdmin'>
        <Logo/>
        <div className='orderList'>
            <div className='tableOrder'>
                <div className="row header">
                    <div className="cell number">
                        №
                    </div>
                    <div className="cell time">
                        Время заказа
                    </div>
                    <div className="cell name">
                        ФИО
                    </div>
                    <div className="cell phone">
                        Номер Телефона
                    </div> 
                    <div className="cell adres">
                        Адрес доставки
                    </div>
                    <div className="cell sumOrder">
                        Сумма заказа
                    </div>
                    <div className="cell payment">
                        Способ оплаты
                    </div>
                    <div className="cell coment">
                        Коментарий
                    </div>
                </div>
                {                      
                    orderList.map(item=>(
                        <Order
                        numberOrder={item.numberOrder}
                        timeOrder={item.timeOrder}
                        name={item.name}
                        phone={item.phone}
                        adres={item.adres}
                        sumOrder={item.sumOrder}
                        payment={item.payment}
                        coment={item.coment}
                        ></Order>
                        
                    ))
                }
            </div>            

        </div>
            <button onClick={()=>addOrder()} className={"admin"}>Добавить заказ</button>
    </div>
    );
};

export default UserPanel;