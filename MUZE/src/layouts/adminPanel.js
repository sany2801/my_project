import React from 'react';
import Logo from '../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import restData from "../components/map/data.json"
import RestItem from '../components/restItem/RestItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PopapModal from '../components/popapModal/PopapModal';
// import Map from '../components/map/map';
const AdminPanel = () => {
    const reslist = useSelector(state => state.reslist)
    const [modalActive, setModalActive] = useState(false)
    const info = ()=>{

        setModalActive(true)
    }
    const navigate = useNavigate()

    return (    
        <div className='wrapperAdmin'>
            <Logo/>
            <div className='restaranList'>
                <ul>
                    {reslist.map(item=>(
                        <>
                    <li key={item.geometry.id} id={item.geometry.id} onClick={()=>info()}>    
                        <RestItem  key={item.geometry.id} data={item} ></RestItem>  
                    </li>
                        </>
                    ))}

                </ul>

            </div>
                <button onClick={()=>navigate("/addrestaran")} className={"admin"}>Добавить ресторан</button>
        </div>
    );
};

export default AdminPanel;