import React from 'react';
import cl from './TagsItem.module.css'


const TagsItem = ({info, openModal }) => {
    if (info) {
        return (
            <div className={cl.item}>
                <div className={cl.content}>
                    <h5 className={cl.tags}>{info.tags.join(' ')}</h5>
                    <p className={cl.description}>{info.description}</p>
                    <button onClick={() => openModal(info)} className={cl.button}>Подробнее</button>
                </div>
            </div>
        );
    }
};

export default TagsItem;