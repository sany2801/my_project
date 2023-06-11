import React, { useState } from 'react';
import menu from "../menu/menu.json"
import "./style.css"
import {Routes, Route, Link} from 'react-router-dom'

const NavMenu = ({tittle, images, className}) => {
    return(
        
        <div className={className}>
            <ul>
                {menu.map(item=>(
                    <Link to={item.tittle}>
                        <img src={item.img}></img>
                        <p>{item.tittle}</p>
                    </Link>
                ))}
            </ul>
        </div>
    )     


}
export default NavMenu;