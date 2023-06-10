import React from 'react';
import "./style.css"
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const AuthorizationForm = () => {
    const [password, setPassword] = useState('password')
    const [passwordValue, setPasswordValue] = useState('')
    const [loginValue, setLoginValue] = useState('')
    const [passwordControlClass, setpasswordControlClass] = useState("password-control")
    const [validation, setValidation] = useState("none")
    const PasswordControlChenge = ()=>{
        if(password === "password"){
            setPassword("text")
            setpasswordControlClass("password-controlActive")
        }
        else{
            setpasswordControlClass("password-control")
            setPassword('password')
        }
    }
    
    
    
    const navigate = useNavigate() 
    
    const autorization = (e)=>{
        e.preventDefault()
        if(loginValue === "admin" && passwordValue === "admin"){
            navigate("/admin")
        }
        else if (loginValue === "user" && passwordValue === "user"){
            navigate('/userPanel')
        }
        else{
            setValidation("block")
        }
    }

    return (
                <form className='formAuthorization'>
                    <h2>Sign in</h2>
                    <input type='text' value={loginValue} onChange={(e)=>setLoginValue(e.target.value)} placeholder='Login'/>

                    <div className='inputPassword'>
                        <input type={password} value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)} placeholder='Password'/>
                        <div onClick={PasswordControlChenge} className={passwordControlClass}></div>
                    </div>
                    <span style={{display:validation}}>Неверные данный авторизации</span>
                    <button type='submit' onClick={(e)=>autorization(e)}> Login in</button>
                </form>
    );
};

export default AuthorizationForm;