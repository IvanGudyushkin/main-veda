import React from 'react';
import cl from './Article.module.css'
const Article = ({img, title, description}) => {
    return (
        <div className={cl.item}>
            {/*<img/>*/}
            <div className={cl.cringe}/>
            <h5 className={cl.title}>{title}</h5>
            <p className={cl.description}>{description}</p>
            <button className={cl.button}>Подробнее</button>
        </div>
    );
};

export default Article;