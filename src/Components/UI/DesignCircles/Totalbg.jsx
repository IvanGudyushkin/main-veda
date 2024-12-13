import React from 'react';
import bg1 from "../../../Assets/Images/background-1.svg";
import bg2 from "../../../Assets/Images/picture.webp";
import {Background1, Background2, Background3, Background4} from "./index";
import cl from './DesignCircles.module.css'
const Totalbg = () => {
    return (
        <div className={cl.total}>
            <div className={'containerbg-1'}>
                <img className={"bg-1"} src={bg1} alt={"nice bg"}/>
            </div>
            <div className={'containerbg-2'}>
                <img className={"bg-2"} src={bg2} alt={"nice bg"}/>
            </div>
            <Background1/>
            <Background2/>
            <Background3/>
            <Background4/>
        </div>
    );
};

export default Totalbg;