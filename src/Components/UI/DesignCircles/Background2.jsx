import React from 'react';
import cl from "./DesignCircles.module.css";
import portal from "../../../Assets/Images/Portal.svg";
import moon from "../../../Assets/Images/MoonBg.svg";

const Background2 = () => {
    const portals = new Array(10).fill(null);  // Создаём массив из 30 элементов
    return (
        <div className={cl.containerbg2}>
            {portals.map((_, index) => (
                <img
                    key={index}
                    className={`${cl.portal} ${cl[`p${index + 31}`]}`}
                    src={portal}
                    alt={'portal'}
                />
            ))}
            <img
                className={`${cl.portal} ${cl.m1}`}
                src={moon}
                alt={'portal'}
            />
            <img
                className={`${cl.portal} ${cl.m2}`}
                src={moon}
                alt={'portal'}
            />
        </div>
    );
};

export default Background2;