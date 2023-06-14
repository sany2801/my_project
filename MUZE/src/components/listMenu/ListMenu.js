import "./listMenu.css"

import React from 'react';

const ListMenu = ({name, composition, price, img, fn}) => {
    return (
        <li className="listMenu">
            <img alt='img' src={img}></img>
            <h2>{name}</h2>
            <p className='price'>{price}$</p>
            <p className='composition'>{composition}</p> 
            <button style={{width:'100%'}} onClick={fn}>Добавить</button>       
        </li>
    );
};

export default ListMenu;