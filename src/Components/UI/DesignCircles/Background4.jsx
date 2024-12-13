import React from 'react';
import cl from "./DesignCircles.module.css";
import portal from "../../../Assets/Images/Portal.svg";
import moon from "../../../Assets/Images/MoonBg.svg";

const Background4 = () => {
    const portals = new Array(30).fill(null);  // Создаём массив из 30 элементов
    return (
        <div className={cl.containerbg4}>
            {portals.map((_, index) => (
                <img
                    key={index}
                    className={`${cl.portal} ${cl[`p${index + 1}`]}`}
                    src={portal}
                    alt={'portal'}
                />
            ))}
            <img
                className={`${cl.portal} ${cl.m5}`}
                src={moon}
                alt={'portal'}
            /><img
                className={`${cl.portal} ${cl.m6}`}
                src={moon}
                alt={'portal'}
            />
        </div>
    );
};

export default Background4;