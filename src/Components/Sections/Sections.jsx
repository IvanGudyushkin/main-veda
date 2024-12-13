import React from 'react';
import AstrologyBlock from "../UI/AstrologyBlock/AstrologyBlock";
import astrologyImage from "../../Assets/Images/Section_1.webp";
import vastyImage from "../../Assets/Images/Section_2.webp";
import practicesImage from "../../Assets/Images/Section_3.webp";
import cl from './Sections.module.css'
import planet from  '../../Assets/Images/Clip path group.webp'
import home from  '../../Assets/Images/home.webp'
import lotus from  '../../Assets/Images/lotus.webp'
import {useWindowSize} from "../../hooks/useWindowSize";
import ButtonQuestion from "../UI/ButtonQuestion/ButtonQuestion";
const Sections = () => {

    const [width] = useWindowSize()

    const astrology = {
        img:astrologyImage,
        title: "Астрология",
        description:"Инструмент помощи в любом вопросе и сфере жизни",
        tags: ["#прогнозирование_событий", "#повышение_осознанности", "#планирование", "#взвешенное_принятие_решений", "#расширение_сознания", "#подбор_дат_для_важных_событий_в_жизни"]
    }
    const vasty = {
        img:vastyImage,
        title: "Васту",
        description:"Жилое и рабочее помещение определенным образом влияет на тех, кто там находится. Сделайте ваш дом, офис местом силы, благосостояния, здоровья, счастья, гармонии в отношениях",
        tags: ["#недвижимость", "#дом", "#квартира", "#офис", "#земельный_участок", "#подбор", "#коррекция", "#аренда", "#прокачивание", "#бизнес", "#покупка", "#продажа"]
    }
    const practices = {
        img:practicesImage,
        title: "Духовные практики",
        description:"Для раскрытия духовной силы \n" +
            "в сердце, расширения возможностей, реализации намерений",
        tags: ["#священные_писания", "#мантры", "#аскезы", "#посты", "#практики", "#законы_энергии", "#карма", "#вселенная", "#Бог"]
    }
    return (
        <div className={cl.block}>
            <div className={cl.col}>
                <AstrologyBlock info={astrology}/>
                <div className={cl.container}>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={planet} alt={'planet'}/>
                                <span className={cl.title}>Практики по планетам</span>
                            </div>
                            { width >= 1400 ? <span className={cl.type}>самопомощь</span> : <ButtonQuestion/>}
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={planet} alt={'planet'}/>
                                <span className={cl.title}>Астробот</span>
                            </div>
                            { width >= 1400 ? <span className={cl.type}>самопомощь</span> : <ButtonQuestion/>}
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={planet} alt={'planet'}/>
                                <span className={cl.title}>Прогноз на неделю</span>
                            </div>
                            { width >= 1400 ? <span className={cl.type}>самопомощь</span> : <ButtonQuestion/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.col}>
                <AstrologyBlock info={vasty}/>
                <div className={cl.container}>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={home} alt={'planet'}/>
                                <span className={cl.title}>Васту-ретриты</span>
                            </div>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={home} alt={'planet'}/>
                                <span className={cl.title}>Консультации по Васту</span>
                            </div>
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={home} alt={'planet'}/>
                                <span className={cl.title}>Элементы Васту</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.col}>
                <AstrologyBlock info={practices}/>
                <div className={cl.container}>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={lotus} alt={'planet'}/>
                                <span className={cl.title}>Практики поклонов</span>
                            </div>
                            { width >= 1400 ? <span className={cl.type}>самопомощь</span> : <ButtonQuestion/>}
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={lotus} alt={'planet'}/>
                                <span className={cl.title}>Посты и аскезы</span>
                            </div>
                            { width >= 1400 ? <span className={cl.type}>самопомощь</span> : <ButtonQuestion/>}
                        </div>
                    </div>
                    <div className={cl.item}>
                        <div className={cl.background}>
                            <div className={cl.content}>
                                <img className={cl.img} src={lotus} alt={'planet'}/>
                                <span className={cl.title}>Ягьи онлайн из Индии</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sections;