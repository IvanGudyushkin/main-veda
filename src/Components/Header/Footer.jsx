import React from 'react';
import cl from "./Header.module.css";

const Footer = () => {
    return (
        <header className={cl.footer}>
            <div className={cl.content}>
                <span className={cl.link}>Мероприятия</span>
                <span className={cl.link}>Консультации</span>
                <span className={cl.link}>Обо мне</span>
                <span className={cl.link}>Школа астрологии</span>
                <span className={cl.link}>Блог</span>
            </div>
            <div className={cl.line}/>
        </header>
    );
};

export default Footer;