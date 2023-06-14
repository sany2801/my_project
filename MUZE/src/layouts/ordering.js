import React, { useEffect, useState } from 'react';
import dataMenu from "../components/menu/menu.json"
import NavMenu from '../components/NavMenu/NavMenu';
import Menu from '../components/menu/menu';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Button from '../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import ListMenu from '../components/listMenu/ListMenu';

const Ordering = () => {
    const order_list = useSelector(state=>state.orderList[0])
    const adres = useSelector(state => state.route[0].value)
    const [list, setList] = useState ([])
    const list_copy = Object.assign([],list)
    const [sumOrder, setSumOrder] = useState(0)
    
    console.log(order_list)
    // console.log(adres)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const back = ()=>{
        navigate("/addOrder")
    }
    const add = (e)=>{
        // console.log(e)
        list_copy.push({name: e.name, id: e.id, price: e.price, count: 1})
        setList(fltr(list_copy))
        setSumOrder(sumOrder + e.price)
    }
    const addOnePosition = (e)=>{
        e.count = e.count+1
        setSumOrder(sumOrder + e.price)
    }
   
    const removeOnePosition = (e) =>{
        e.count = e.count-1
        console.log(e)
        setList(list)        
        setSumOrder(sumOrder - e.price)
        
    }
    list.map(item =>{
        if(item.count===0){
            setList(list.filter((count)=>count.count >0))
        }
    })
    const deleted  = (e)=>{
        setList(list.filter((ID)=> ID.id !== e.id))
        console.log(e)
        setSumOrder(sumOrder - e.price*e.count)
    
    }

    const saveOrder = ()=>{
        const date = new Date()

        dispatch({
            type: "ALL_ORDER_VALUE",
                payload:{
                    orderID: order_list.orderID,
                    numberOrder: Math.ceil(Math.random()*10000),
                    name: order_list.name, 
                    phone: order_list.phone, 
                    adres: order_list.adres,
                    timeOrder: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,  
                    payment: "Картой" || "Наличными",  
                    coment: order_list.coment,
                    order_list: list,
                    sumOrder: sumOrder,
                }
        })
        navigate("/userPanel")
    }
    const fltr = (list)=>{
        const newList =[];
        const map = {};
        list.forEach(item => {
            const id = item.id;
            if (map[id]) {
              map[id].count += item.count;
            } else {
              map[id] = item;
              newList.push(item);
            }
          });
        return newList;
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
                                        {useEffect}
                                        {item.list.map(key=>(
                                            <ListMenu name={key.name} img={key.img} price={key.price} composition={key.composition} 
                                            fn={()=>add(key)}/>
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
                        <div className='orderList'>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={()=>addOnePosition(item)}>+1</button>
                            <p style={{fontSize:"20px", }}>{item.count}</p>
                            <button onClick={()=>removeOnePosition(item)}>-1</button>
                            <button onClick={()=>deleted(item)}>delet</button>
                        </div>
                    ))
                 }
            </div>
                <h2>Иттого: {sumOrder.toFixed()}$</h2>
        </div>
        <Button onClick={()=>back()}>Назад</Button>
        <Button onClick={()=>saveOrder()} className="admin">Сахранить</Button>
    </>
    );
};

export default Ordering;            