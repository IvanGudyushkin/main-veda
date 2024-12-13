import React, { useEffect, useRef, useState } from 'react';
import question from '../../../Assets/Images/Question.svg';
import cl from './ButtonQuestion.module.css';

const ButtonQuestion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef();
    const buttonRef = useRef();

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Добавляем обработчик события click на документ
        document.addEventListener('click', handleClickOutside);

        return () => {
            // Удаляем обработчик события click при размонтировании компонента
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <button ref={buttonRef} className={cl.button} onClick={togglePopup}>
            <img title={'Самопомощь'} src={question} alt={"Самопомощь"}/>
            <div ref={popupRef} className={`${cl.window} ${isOpen ? cl.show : ''}`}>
                Самопомощь
            </div>
        </button>
    );
};

export default ButtonQuestion;
