import React from 'react';
import cl from './DesignCircles.module.css'
import portal from '../../../Assets/Images/Portal.svg'
const Background1 = () => {
        const portals = new Array(30).fill(null);  // Создаём массив из 30 элементов
        return (
        <div className={cl.containerbg1}>
                {portals.map((_, index) => (
                    <img
                        key={index}
                        className={`${cl.portal} ${cl[`p${index + 1}`]}`}
                        src={portal}
                        alt={'portal'}
                    />
                ))}
        </div>
    );
};

export default Background1;