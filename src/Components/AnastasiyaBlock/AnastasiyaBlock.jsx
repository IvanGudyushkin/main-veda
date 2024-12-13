import React from 'react';
import cl from './Anastasiya.module.css'
import veda from '../../Assets/Images/Rectangle 172.png'
import {useWindowSize} from "../../hooks/useWindowSize";
const AnastasiyaBlock = () => {

    const [width] = useWindowSize()

    const openLinkInNewTab = () => {
        window.open('https://jyotish.anastasiyashakti.com/', '_blank');
    };


    return (
        <div className={cl.block}>
            <div className='yakor' id='about'/>
            <div className={cl.row1}>
                <div className={cl.photo}>
                    <img src={veda} alt="Анастасия Шакти"/>
                </div>
                {width > 960 ?
                    <div className={cl.info}>
                        <h2 className={cl.title}>Анастасия Шакти</h2>
                        <p className={cl.description}>Специалист в ведической астрологии и васту, восточный психолог, проводник. Автор и ведущая практических онлайн ретритов, практик
                            по улучшению гороскопа: жизни, исцеления судьбы, раскрытия мудрости, духовной силы, удачи. Целитель вечного — Души.</p>
                        <div className={cl.goldDescription}>
                            <h3 className={cl.itemTitle}>Проводник и сакральные знания и практики по:</h3>
                            <ul className={cl.ul1}>
                                <li className={cl.lotus}>самоосвобождение от паттернов, программ, препятствующих счастью
                                    в
                                    отношениях
                                </li>
                                <li className={cl.lotus}>выход на более высокий уровень жизни, комфорта, внутреннего
                                    баланса, здоровья, ресурсности, гармонии
                                </li>
                                <li className={cl.lotus}>разрешение сложных жизненных ситуаций</li>
                            </ul>
                            <h3 className={cl.itemTitle}>Врождённые способности:</h3>
                            <ul className={cl.ul2}>
                                <li className={cl.li}>считывать информацию, судьбу на расстоянии</li>
                                <li className={cl.li}>исцелять через голос, своё поле</li>
                            </ul>
                        </div>
                    </div>
                    :
                    <>
                    <div className={cl.info}>
                        <h2 className={cl.title}>Анастасия Шакти</h2>
                        <p className={cl.description}>Специалист в ведической астрологии и васту, восточный психолог, проводник. Автор и ведущая практических онлайн ретритов, практик
                            по улучшению гороскопа: жизни, исцеления судьбы, раскрытия мудрости, духовной силы, удачи. Целитель вечного — Души.</p>
                    </div>
                    <div className={cl.goldDescription}>
                        <h3 className={cl.itemTitle}>Проводник и сакральные знания и практики по:</h3>
                        <ul className={cl.ul1}>
                            <li className={cl.lotus}>самоосвобождение от паттернов, программ, препятствующих счастью
                                в
                                отношениях
                            </li>
                            <li className={cl.lotus}>выход на более высокий уровень жизни, комфорта, внутреннего
                                баланса, здоровья, ресурсности, гармонии
                            </li>
                            <li className={cl.lotus}>разрешение сложных жизненных ситуаций</li>
                        </ul>
                    </div>
                    </>
                }
            </div>
            <div className={cl.row2}>
                <div className={cl.item}>
                    <span className={cl.itemTitle}>15 лет</span>
                    <span className={cl.itemDescription}>в практике восточных наук (с 2009 года)</span>
                </div>
                <div className={cl.item}>
                    <span className={cl.itemTitle}>более 40</span>
                    <span className={cl.itemDescription}>исцеляющих судьбы ретритов (с 2020 года)</span>
                </div>
                <div className={cl.item}>
                    <span className={cl.itemTitle}> с 2017 года</span>
                    <span className={cl.itemDescription}>духовная инициация в ведической традиции</span>
                </div>
                <div className={cl.item}>
                    <span className={cl.itemTitle}>более 3000</span>
                    <span className={cl.itemDescription}>консультаций</span>
                </div>
                <div onClick={openLinkInNewTab } className={cl.item}>
                    <span className={cl.itemTitle}> создала международную школу астрологии</span>
                </div>
                <button onClick={openLinkInNewTab } className={cl.button}>Перейти на страницу школы</button>
            </div>
        </div>
    );
};

export default AnastasiyaBlock;