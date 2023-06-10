import React from 'react';

const inputCheckbox = ({valueFirst, valueSecond, setValue, name}) => {
    return (
        <div>
            <label  for="delivery">Достава</label>
                    <div className="delivery">
                        <input  id="true"
                                value={valueFirst}
                                type="radio" 
                                name={name} 
                                checked={valueFirst===true} 
                                onChange={setValue}
                        ></input>
                        <label for="true">{valueFirst}</label>

                        <input  id="false" 
                                value={valueSecond}
                                type="radio" 
                                name={name} 
                                checked={valueSecond===false}
                                onChange={setValue}
                                ></input>
                        <label for="false">{valueSecond}</label>
            </div>
        </div>
    );
};

export default inputCheckbox;