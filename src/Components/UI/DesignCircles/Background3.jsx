import React from 'react';
import cl from "./DesignCircles.module.css";
import portal from "../../../Assets/Images/Portal.svg";
import moon from "../../../Assets/Images/MoonBg.svg";
import spiral from '../../../Assets/Images/Spiral.svg'
const Background3 = () => {
    const portals = new Array(6).fill(null);
    return (
        <div className={cl.containerbg3}>
            <img src={spiral} alt={'spiral'} className={cl.img3}/>
            {portals.map((_, index) => (
                <img
                    key={index}
                    className={`${cl.portal} ${cl[`p${index + 41}`]}`}
                    src={portal}
                    alt={'portal'}
                />
            ))}
            <img
                className={`${cl.portal} ${cl.m3}`}
                src={moon}
                alt={'portal'}
            />
            <img
                className={`${cl.portal} ${cl.m4}`}
                src={moon}
                alt={'portal'}
            />
        </div>
    );
};

export default Background3;