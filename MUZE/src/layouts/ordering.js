import React, { useState } from 'react';
import dataMenu from "../components/menu/menu.json"
import NavMenu from '../components/NavMenu/NavMenu';
import Menu from '../components/menu/menu';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Button from '../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

const Ordering = () => {
    const order_list = useSelector(state=>state.orderList)
    const adres = useSelector(state => state.route[0].value)
    console.log(adres)
    const [orderSum, setOrderSum] = useState(0)
    console.log(order_list)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const back = ()=>{
        navigate("/addOrder")
    }
    const add = (e)=>{


    }
    const saveOrder = ()=>{
  
        
    }


   dataMenu.map(item=>{
   })
    return (
    <>
        <NavMenu className="nav_wrapper"></NavMenu>
        <div className='wrapper_ordering'>
                <Routes>
                 {
                     dataMenu.map(item=>(
                         <Route path={item.tittle} element={
                             <>
                                <div className='list_menu'>
                                    <ul>
                                        {item.list.map(key=>(
                                            <li>
                                            <img alt='img' src={key.img}></img>
                                            <h2>{key.name}</h2>
                                            <p className='price'>{key.price}$</p>
                                            <button onClick={()=>{add(key)}}>Добавить</button>      
                                            <p className='composition'>{key.composition}</p> 
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        }></Route>
                    ))
                 }
                </Routes>
            <div className='order_list'>
           
            </div>
                <h2>Иттого: {orderSum.toFixed()}$</h2>
        </div>
        <Button onClick={()=>back()}>Назад</Button>
        <Button onClick={()=>saveOrder()} className="admin">Сахранить</Button>
    </>
    );
};

export default Ordering;            