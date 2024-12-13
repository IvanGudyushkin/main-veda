import React, {useRef} from 'react';
import cl from './ItemsBlock.module.css'
import arrow from "../../Assets/Images/arrowTitle.svg";
import {useScrollbar} from "../../hooks/useScrollbar";
const ItemsBlock = ({children, title, more}) => {

    const scroll = useRef();
    useScrollbar(scroll)

    return (
        <div className={cl.block}>
            <div className={cl.row1}>
                <h2 className={cl.title}>
                    {title}
                </h2>
                {more && <span className={cl.moreTitle}>все статьи<img src={arrow} alt={'arrow'}/></span>}
            </div>
            <div ref={scroll}>
                <div className={cl.container}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ItemsBlock;