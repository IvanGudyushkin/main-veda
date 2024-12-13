import React from 'react';
import cl from "./ConsultationsBlock.module.css";
import arrow from '../../Assets/Images/arrowTitle.svg'
import tasks from '../../Assets/Images/road.webp'
import nast from '../../Assets/Images/Nast.webp'
import what from '../../Assets/Images/what.webp'
import longArrow from '../../Assets/Images/ArrowMore.svg'
const ConsultationsBlock = () => {
    const items = [
        {
            img: tasks,
            title: "Кармические задачи. Жить, чтобы все получалось",
            description: 'Помощь, рекомендации, настрой, подробное описание вашего ближайшего особого транзита Сатурна в 7,5 лет'
        },
        {
            img: nast,
            title: "Личное сопровождение/наставничество",
            description: 'Очень краткое описание программы. Прям такое, чтобы в четыре строчки максимум поместилось. А лучше 3.'
        },
        {
            img: nast,
            title: "Период Саде-Сати \n" +
                "Транзиты Сатурна",
            description: 'Задачи рождения, возможности, бонусы \n' +
                'и ограничения в определенных сферах жизни. Астрологические и духовные рекомендации'
        },
        {
            img: what,
            title: "Прогноз на месяц",
            description: 'Очень краткое описание программы. Прям такое, чтобы в четыре строчки максимум поместилось. А лучше 3.'
        },
    ]
    return (
        <div className={cl.block}>
            <div className='yakor' id='consultations'/>
            <div className={cl.row1}>
                <h2 className={cl.title}>Консультации</h2>
                <span className={cl.moreTitle}>все консультации <img src={arrow} alt={'arrow'}/></span>
            </div>
            <div className={cl.container}>
                {items.map((item, index) => (
                    <div key={index} className={cl.item}>
                        <div className={cl.col1}>
                            <img className={cl.img} src={item.img} alt={item.title}/>
                            <span className={cl.more}>Подробнее <img className={cl.arrow} src={longArrow}
                                                                     alt={"arrow"}/></span>
                        </div>
                        <div className={cl.col2}>
                            <h4 className={cl.itemTitle}>{item.title}</h4>
                            <p className={cl.itemDescription}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConsultationsBlock;