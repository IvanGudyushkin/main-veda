import React from 'react';
import cl from './FeedbackBlock.module.css';
import FeedbackItem from "../UI/FeedbackItem/FeedbackItem";
import {usePassiveScroll} from "../../hooks/usePassiveScroll";

const FeedbackBlock = ({ feedbacks }) => {
    const [carouselRef   ,blockRef] = usePassiveScroll()
    return (
        <div className={cl.block} ref={blockRef}>
            <div ref={carouselRef} className={cl.container}>
                {feedbacks.map((feedback, index) => (
                    <FeedbackItem content={feedback.description} key={index}/>
                ))}
            </div>
        </div>

    );
};

export default FeedbackBlock;
