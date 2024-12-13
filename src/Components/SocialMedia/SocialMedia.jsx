import React from 'react';
import tiktok from '../../Assets/Images/tiktok.svg'
import youtube from '../../Assets/Images/youtube.svg'
import instagram from '../../Assets/Images/instagram.svg'
import cl from './SocialMedia.module.css'
const SocialMedia = () => {
    const media = [
        {
            title:'АСТРОЛОГИЯ PRO комфортную жизнь: прогнозируй, улучшай',
            description:'Практичные советы на каждый день, прогнозы для знаков зодиака в важные транзиты планет'
        },
        {
            title:'Практика целительных постов Экадаши',
            description:'Рекомендации, настрой на соблюдение очистительных, оздоравливающих постов Экадаши'
        },
        {
            title:'Ягьи - огненные церемонии для коррекции гороскопа, судьбы',
            description:'Анонс, участие, подбор для коррекции гороскопа, исцеление Рода, онлайн трансляции из Индии'
        },
        {
            title:'Аудиозаписи-чтение Бхагавад-гиты',
            description:'Короткие аудио священного писания, как жить по духовным законам. Открывает удачу. Вне религии'
        },
    ]
    return (
        <div className={cl.block}>
            <h2 className={cl.title}>
                Что ещё есть полезного?
            </h2>
            <div className={cl.container}>
                {
                    media.map((item, index) => (
                        <div className={cl.item} key={index}>
                            <div className={cl.img}/>
                            <h5 className={cl.itemTitle}>{item.title}</h5>
                            <p className={cl.description}>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className={cl.buttons}>
                <button><img src={tiktok} alt={'tiktok'}/></button>
                <button><img src={youtube} alt={'youtube'}/></button>
                <button><img src={instagram} alt={'instagram'}/></button>
            </div>
        </div>
    );
};

export default SocialMedia;