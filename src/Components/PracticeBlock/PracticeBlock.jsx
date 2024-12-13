import React, {useState} from 'react';
import cl from './Practice.module.css'
import {planets, rahuketu} from "../UI/Utils/info";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import ModalPlanet from "../UI/ModalWindow/ModalPlanet";
const PracticeBlock = () => {
    const [modalActive, setModalActive] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const showModal = (order) =>{
        setSelectedPlanet(order); // Сохраняем информацию о выбранном заказе
        setModalActive(true); // Открываем модальное окно
    }

    const closeModal = () => {
        setModalActive(false); // Закрываем модальное окно
    };



    return (
        <div className={cl.block}>
            <h2 className={cl.title}>Практики по планетам, которые сделают вашу жизнь лучше</h2>
            <div className={cl.content}>
                <div className={cl.row1}>
                    {planets.map ((planet, index) =>(
                            <div onClick={() => showModal(planet)} className={cl.item} key={index}>
                                <img src={planet.img} alt={planet.name}/>
                                <span>{planet.name}</span>
                            </div>
                        )
                    )}
                    {rahuketu.map ((planet, index) =>(
                            <div onClick={() => showModal(planet)} className={cl.item} key={index}>
                                <img src={planet.img} alt={planet.name}/>
                                <span>{planet.name}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
            {modalActive && selectedPlanet &&
                <ModalWindow close={closeModal}>
                    <ModalPlanet planet={selectedPlanet}/>
                </ModalWindow>
            }
        </div>
    );
};

export default PracticeBlock;