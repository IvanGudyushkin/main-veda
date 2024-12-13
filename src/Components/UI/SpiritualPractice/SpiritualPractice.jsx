import React from 'react';
import cl from './SpiritualPractice.module.css'
const SpiritualPractice = ({title, description}) => {
    return (
        <div className={cl.item}>
            <div className={cl.content}>
                <div className={cl.img}/>
                <div className={cl.text}>
                    <h5 className={cl.title}>{title}</h5>
                    <p className={cl.description}>{description}</p>
                </div>
                <button className={cl.button}>Подробнее</button>
            </div>
        </div>
    );
};

export default SpiritualPractice;