
import React from 'react';
import Button from '../components/Button/Button';
import AuthorizationForm from '../components/AuthorizationForm/autorizationForm';
import "./style.css"
const AutorizationPage = () => {
    return (
        <>
        <div className='wrapperHome'>
            <Button className={"blackBtn"}>Login in</Button>
            <AuthorizationForm/>
        </div>
        </>
    );
};

export default AutorizationPage;