import React, { useState } from 'react';
import dataMenu from "../components/menu/menu.json"
import NavMenu from '../components/NavMenu/NavMenu';
import Menu from '../components/menu/menu';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Button from '../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

const Ordering = () => {
    const list  = useSelector(state=>state.list)
    const order_list = useSelector(state=>state.orderlist)
    const adres = useSelector(state => state.route[0].value)
    console.log(adres)
    const [orderSum, setOrderSum] = useState(0)
    console.log(order_list)
    console.log(list)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const back = ()=>{
        navigate("/addOrder")
    }
    const add = (e)=>{
        // console.log(e)
        setOrderSum(orderSum + e.price)
        dispatch({
            type:"LIST_ORDER",
            payload: {name: e.name, price: e.price}
        })
    }
    const saveOrder = ()=>{
        navigate("/userPanel")
        dispatch({
            type:"ADD_ORDER",
            payload:{
                nuberOrder:Date(),
                sumOrder: orderSum,
                list: [list],
                adress: adres
            }
        })
        
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
                {
                    list.map(item=>(
                        <ul>
                            <li>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </li>
                        </ul>
                    ))
                }
            </div>
                <h2>Иттого: {orderSum.toFixed()}$</h2>
        </div>
        <Button onClick={()=>back()}>Назад</Button>
        <Button onClick={()=>saveOrder()} className="admin">Сахранить</Button>
    </>
    );
};

export default Ordering;            