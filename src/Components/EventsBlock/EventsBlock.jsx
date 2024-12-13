import React, {useRef} from 'react';
import cl from './EventsBlock.module.css'
import emblemJyotish from '../../Assets/Images/Moon.webp'
import emblemAstro from '../../Assets/Images/emblemlotus.webp'
import {useScrollbar} from "../../hooks/useScrollbar";
const EventsBlock = () => {

    const configScroll = {
        className: 'os-theme-light'
    }

    const container = useRef();
    useScrollbar(container, configScroll)

    const events = [
        {
            title: 'Сатурн — повелитель кармы',
            description: 'Запустите изменения в судьбе, обретете опору в сложных жизненных ситуациях, поймете как регулировать черные полосы, активируете денежный канал.',
            dateRange: '1–10 июня',
            price: '6000 грн'
        },
        {
            title: 'Бизнес по-женски',
            description: 'Ваши практики для успеха в делах, обретения своего дела, нахождения предназначения. Обустройство рабочего места по правилам Васту.',
            dateRange: '16–25 июня',
            price: '6000 грн'
        },
        {
            title: 'Благословение рода на процветание',
            description: 'Изучите роди рода в своей судьбе. Исцелите и восстановите связь с предком, который дает приятие вам в данный момент. Проведете необходимые практики для рода.',
            dateRange: '17–27 сентября',
            price: '8000 грн'
        },{
            title: 'Мудрость и сила женщины',
            description: 'Изучите механизм выстраивания взаимоотношений между мужчинойи женщиной. Гармонизируете отношения с мужем, детьми. Измените сценарии в роду по женской линии с мужьями и детьми. Увеличите удачуи финансы у мужей. Увеличите истинную самоценность и ценностьв глазах мужчин, детей',
            dateRange: '18–27 июля',
            price: '6000 грн'
        },
        {
            title: 'Деньги по-женски',
            description: 'Построите васту-карту своего жилья и узнаете причины проблем в определенных сферах. Проведете васту-гармонизацию энергий дома/квартиры для финансового роста, денежную практику для богини удачи Лакшми.',
            dateRange: '30 октября–8 ноября',
            price: '8000 грн'
        },
        {
            title: 'Астропрогноз 2025 и + гороскоп для знаков зодиака 2025',
            description: 'Эмоциональная стабильность и защищенность от "сюрпризов" года. Календари с благоприятными и нет датами для деловой сферы, финансов, начинаний. Особые даты и практики на весь год для увеличения благосостояния, удачи, закладки успешного 2025 года. Рекомендации с датами для всех сфер жизни для знака зодиака.',
            dateRange: '22 декабря',
            price: '8000 грн'
        },

    ];
    return (
        <div  className={cl.block}>
            <div className='yakor' id="events"/>
            <h2 className={cl.title}>Ближайшие мероприятия</h2>
            <div className={cl.content}>
                <div className={cl.col1}>
                    <div className={cl.itemJyotish}>
                        <img className={cl.emblem} src={emblemJyotish} alt={'Курс Джйотиш'}/>
                        <div className={cl.info}>
                            <h4 className={cl.itemTitle}>Курс Джйотиш</h4>
                            <p className={cl.itemDescription}>
                                Курс по ведической астрологии<br/>
                                «Выход за рамки судьбы». Для познания себя, изменения судьбы, улучшения комфорта жизни.
                            </p>
                            <div className={cl.containertags}>
                                <span className={cl.jyotishTag}>
                                    йога сознания
                                </span>
                                <span className={cl.jyotishTag}>
                                    улучшения судьбы
                                </span>
                                <span className={cl.jyotishTag}>
                                    мудрость
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cl.itemAstro}>
                        <img className={cl.emblem} src={emblemAstro} alt={'Астропрогноз'}/>
                        <div className={cl.info}>
                            <h4 className={cl.itemTitle}>Астрологический прогноз</h4>
                            <p className={cl.itemDescription}>
                                Чего ждать в каждый месяц года?<br/>
                                Практики для удачи, процветания на каждый месяц.
                                Гороскоп для знаков зодиака
                            </p>
                            <div className={cl.containertags}>
                                <span className={cl.astroTag}>
                                    защита
                                </span>
                                <span className={cl.astroTag}>
                                    деньги
                                </span>
                                <span className={cl.astroTag}>
                                    удача
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className={cl.col2}>
                    <div ref={container}>
                    {events.map((event, index) => (
                        <div key={index} className={cl.eventCard}>
                            <div className={cl.eventContent}>
                                <div className={cl.eventInfo1}>
                                    <h3 className={cl.eventTitle}>{event.title}</h3>
                                    <p className={cl.eventDescription}>{event.description}</p>
                                </div>
                                <div className={cl.eventInfo2}>
                                    <span className={cl.eventDate}>{event.dateRange}</span>
                                    <span className={cl.eventPrice}>Вознаграждение {event.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsBlock;