import React from 'react';
import "../style/bootstrap.min.css"
import "./main.js"
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useState } from 'react';



function Form(props) {
    const [value, setValue] = useState();

    return (
        <div>
        
    <section className="main mt-4">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label className='mb-2' for="fio">ФИО</label>
                        <AddressSuggestions token="c8bc0f0128c7944afa9f72fcea2fd8f13793ffd6" value={value} onChange={setValue} />

                        <input id="fio" class="form-control" type="text" name="fio" placeholder="ФИО"/>
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-2' for="job">Место работы</label>
                        <input id="job" class="form-control" type="text" name="job" placeholder="Место работы"/>
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-2' for="real-adres">Фактический адрес</label>
                        <input id="real-adres" class="form-control address" type="text" name="real-adres" placeholder="Фактический адрес"/>
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-2' for="date">Дата рождения</label>
                        <input id="date" class="form-control" type="date" name="date" />
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-2' for="adress">Адрес прописки</label>
                        <input id="adress" class="form-control" type="text" name="adress" placeholder="Адрес прописки"/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary' onClick={()=>{console.log(value.data.geo_lat, value.data.geo_lon)}}>Отправить заявку</button>
    </section>


        </div>
    );
}

export default Form;