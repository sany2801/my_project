import React from 'react';
import "./style.css"
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const AuthorizationForm = () => {
    const [password, setPassword] = useState('password')
    const [passwordControlClass, setpasswordControlClass] = useState("password-control")
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
  
    return (
                <form className='formAuthorization'>
                    <h2>Sign in</h2>
                    <input type='text' placeholder='Login'/>
                    <div className='inputPassword'>
                        <input type={password} placeholder='Password'/>
                        <div onClick={PasswordControlChenge} className={passwordControlClass}></div>
                    </div>
                    <button type='submit' onClick={()=>navigate('/admin')}> Login in</button>
                </form>
    );
};

export default AuthorizationForm;