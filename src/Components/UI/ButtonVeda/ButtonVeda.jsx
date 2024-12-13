import React from 'react';
import cl from './ButtonVeda.module.css'
const ButtonVeda = ({children}) => {
    return (
        <button className={cl.button}>
            {children}
        </button>
    );
};

export default ButtonVeda;