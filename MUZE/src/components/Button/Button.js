import { useState } from 'react'
import './Button.css'
import { useDispatch, useSelector } from 'react-redux'
const Button = ({children, className, active, onClick})=>{
    

    return(
        <button className={className} disabled={active} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button