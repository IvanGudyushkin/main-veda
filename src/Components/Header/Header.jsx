import React, {useEffect, useState} from 'react';
import cl from './Header.module.css'
import menu from '../../Assets/Images/menu.svg'
import x from '../../Assets/Images/x.svg'
import {useWindowSize} from "../../hooks/useWindowSize";
const Header = () => {
    const [width] = useWindowSize()
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuHeight, setMenuHeight] = useState('48px'); // Start with 0px to avoid initial expansion

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);

        // Update the height based on current visibility and content height
        if (!menuVisible) {  // If the menu is about to be opened
            setMenuHeight(`500px`); // Set the height to scrollHeight
        } else { // If the menu is about to be closed
            setMenuHeight('48px'); // Collapse it smoothly
        }
    };

    const closeMenu = (event) => {
        if ((!event.target.closest(`.${cl.mobileMenu}`) && !event.target.closest(`.${cl.menu}`)) || event.target.closest(`.${cl.link}`)) {
            setMenuVisible(false);
            setMenuHeight('48px'); // Reset height when menu is closed from outside click
        }
    };

    // const scrollTo = () =>{
    //     document.getElementById('app').style.overflow = 'unset'
    //     setTimeout(( ) => document.getElementById('app').style.overflow = 'hidden', 10)
    // }

    useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    return (
        <header className={cl.header}  >
            <div className={cl.content} style={{ maxHeight: menuHeight }}>
                {
                    width >= 560 ?
                        <>
                            <a href={'#events'} className={cl.link}>Мероприятия</a>
                            <a href={'#about'} className={cl.link}>Обо мне</a>
                            <a href={'#consultations'} className={cl.link}>Консультации</a>
                            <a href={'https://jyotish.anastasiyashakti.com/'} rel="noopener noreferrer" target="_blank"
                               className={cl.link}>Школа астрологии</a>
                            <a href={'#blog'} className={cl.link}>Блог</a>
                        </>
                        :
                        <>
                            <button className={cl.menu} onClick={toggleMenu}>
                                {menuVisible ? <img src={x} alt="x"/>
                                    : <img src={menu} alt="menu"/>
                                }
                            </button>
                            <div className={`${cl.mobileMenu} ${menuVisible ? cl.visible : ''}`}>
                                <a href={'#events'} className={cl.link}>Мероприятия</a>
                                <a href={'#about'} className={cl.link}>Обо мне</a>
                                <a href={'#consultations'} className={cl.link}>Консультации</a>
                                <a href={'https://jyotish.anastasiyashakti.com/'} rel="noopener noreferrer"
                                   target="_blank" className={cl.link}>Школа астрологии</a>
                                <a href={'#blog'} className={cl.link}>Блог</a>
                            </div>
                        </>
                }
            </div>
            <div className={cl.line}/>
        </header>
    );
};

export default Header;