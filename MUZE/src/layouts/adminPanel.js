import React from 'react';
import Logo from '../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import restData from "../components/map/data.json"
import PopapModal from '../components/popapModal/PopapModal.js';
import RestItem from '../components/restItem/RestItem';

const AdminPanel = () => {
    const [modalActive, setModalActive] = useState(false)

    const navigate = useNavigate()
    return (
        
        <div className='wrapperAdmin'>
            <Logo/>
            <div className='restaranList'>
                <ul>
                    {restData.restList.map(item=>(
                    <li key={item.geometry.id} id={item.geometry.id}>    
                        <RestItem data={item}></RestItem>  
                        
                    </li>
                    ))}

                </ul>

            </div>
                <button onClick={()=>navigate("/addrestaran")} className={"admin"}>Добавить ресторан</button>
        </div>
    );
};

export default AdminPanel;