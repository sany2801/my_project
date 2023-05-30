
import React from 'react';
import Button from '../components/Button/Button';
import AuthorizationForm from '../components/AuthorizationForm/autorizationForm';
import "./style.css"
import { useState } from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import PopapModal from '../components/popapModal/PopapModal.js';

const AutorizationPage = () => {
    const [modalActive, setModalActive] = useState(false)
     return (
        <>
        <div className='wrapperHome'>
            <button className={"blackBtn"} onClick={()=>setModalActive(true)}>Login in</button>

            <PopapModal active={modalActive} setActive={setModalActive}>
                <AuthorizationForm></AuthorizationForm>
            </PopapModal>
            
        </div>
        </>
    );
};

export default AutorizationPage;