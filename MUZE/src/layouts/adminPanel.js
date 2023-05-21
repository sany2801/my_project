import React from 'react';
import Form from '../components/adminForm/form';
import Logo from '../components/Logo/Logo';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import restData from "../components/map/data.json"

const AdminPanel = () => {
    const navigate = useNavigate()
    // restData.restList.map(item=>(console.log(item.adres)))
    return (
        
        <div className='wrapperAdmin'>
            <Logo/>
            <div className='restaranList'>
                <ul>
                    {restData.restList.map(item=>(

                    <li>    
                        <div className='restaranOption'>
                            <h2 className='restaranName'>{item.name}</h2>
                            <h3 className='adresTittle'>Адрес:</h3>
                            <p className='adresValue'>{item.adres}</p>
                            <h3 className='tittleDel'>Зона доставки:</h3>
                            <p className='valueDel'>р-н Первомайский</p>
                            <Button>Подробнее</Button>
                        </div>
                    </li>
                    ))}

                </ul>

            </div>
                <button onClick={()=>navigate("/addrestaran")} className={"admin"}>Добавить ресторан</button>
        </div>
    );
};

export default AdminPanel;