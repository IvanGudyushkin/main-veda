import React, { useEffect, useRef, useState } from 'react';
import cl from "./Feedback.module.css";
import helper from "../../../Assets/Images/cloudHelper.svg";

const FeedbackItem = ({ content }) => {
    const item = useRef();
    const [height, setHeight] = useState();
    const [isElipsis, setIsElipsis] = useState(true);
    const descriptionRef = useRef();

    useEffect(() => {
        const element = item.current;
        const descriptionElement = descriptionRef.current;

        const updateElipsis = () => {
            const descriptionHeight = descriptionElement.scrollHeight;
            const itemHeight = element.clientHeight;
            setIsElipsis(descriptionHeight > itemHeight);
        };

        const cancelElipsis = () => {
            setIsElipsis(false);
            setHeight(descriptionElement.scrollHeight);
        };

        // Вызываем функцию для обновления многоточия сразу после загрузки
        updateElipsis();

        element.addEventListener('mouseenter', cancelElipsis);
        element.addEventListener('transitionend', updateElipsis);

        return () => {
            element.removeEventListener('mouseenter', cancelElipsis);
            element.removeEventListener('transitionend', updateElipsis);
        };
    }, []);

    return (
        <div ref={item} className={cl.item}>
            <p
                style={{ height: `${height}px` }}
                ref={descriptionRef}
                className={`${cl.description} ${isElipsis ? '' : cl.full}`}
            >
                {content}
            </p>
            <img className={cl.helper} src={helper} alt="helper" />
        </div>
    );
};

export default FeedbackItem;
