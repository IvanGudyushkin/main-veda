import React from 'react';
import cl from './AstrologyBlock.module.css'
const AstrologyBlock = ({info}) => {
    return (
        <div className={cl.block}>
            <div className={cl.content}>
                <div className={cl.background}>
                    <img  src={info.img} alt={info.title}/>
                </div>
                <div className={cl.info}>
                <div className={cl.text}>
                        <h3>{info.title}</h3>
                        <p>{info.description}</p>
                    </div>
                    <div className={cl.tags}>
                        <span>{info.tags.join(' ')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AstrologyBlock;