import React, { useState} from 'react';
import cl from './ModalWindow.module.css';
import ButtonVeda from "../ButtonVeda/ButtonVeda";
import bgplanet from '../../../Assets/Images/bg_planet.svg'

const ModalPlanet = ({ planet }) => {
    const [selectedInfo, setSelectedInfo] = useState(planet.instructions);
    const [isActiveInstructions, setIsActiveInstructions] = useState(true); // To manage active button styling
    const handlePlanetChange = (infoType) => {
        if (infoType === 'instructions') {
            setSelectedInfo(planet.instructions);
            setIsActiveInstructions(true);
        } else {
            setSelectedInfo(planet.info);
            setIsActiveInstructions(false);
        }
    };

    return (
        <div className={cl.planet}>
            <img src={planet.imgBig} alt={planet.name} className={cl.bg} />
            <img src={bgplanet} alt={planet.name} className={cl.bgEllipse} />
            <h2 className={cl.planetName}>{planet.name}</h2>
            <div className={cl.changeInfo}>
                <span className={`${cl.planetChange} ${isActiveInstructions ? cl.active : ''}`}
                        onClick={() => handlePlanetChange('instructions')}>Инструкция</span>
                <span className={`${cl.planetChange} ${isActiveInstructions ? '' : cl.active}`}
                      onClick={() => handlePlanetChange('info')}>О планете</span>
            </div>
            <p className={cl.planetInfo}>{selectedInfo}</p>
            <ButtonVeda>Читать подробнее</ButtonVeda>
        </div>
    );
};

export default ModalPlanet;
