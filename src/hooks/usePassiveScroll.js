import {useCallback, useEffect, useRef, useState} from "react";
import useHover from "./useHover";

export const usePassiveScroll = () => {
    const carouselRef = useRef();
    const [passiveScrollPosition, setPassiveScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1); // Направление скролла: 1 вперед, -1 назад
    const blockRef = useRef();
    const isHovering = useHover(blockRef)

    const passiveScroll = useCallback(() => {
        const carouselWidth = carouselRef.current.scrollWidth;
        const viewPortWidth = carouselRef.current.offsetWidth;
        const maxCarouselScroll = carouselWidth - viewPortWidth;

        let newPassiveScrollPosition = passiveScrollPosition + (0.5 * scrollDirection);

        if (newPassiveScrollPosition >= maxCarouselScroll || newPassiveScrollPosition <= 0) {
            setScrollDirection(prevDirection => prevDirection * -1);
            newPassiveScrollPosition = newPassiveScrollPosition >= maxCarouselScroll ? maxCarouselScroll : 0;
        }

        setPassiveScrollPosition(newPassiveScrollPosition);
        const scrollFraction = newPassiveScrollPosition / maxCarouselScroll;

        carouselRef.current.style.transform = `translateX(-${scrollFraction * maxCarouselScroll}px)`;
    }, [passiveScrollPosition, scrollDirection]);

    useEffect(() => {
        let intervalId;

        if (!isHovering) {
            intervalId = setInterval(passiveScroll, 10); // Активируем пассивный скролл
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId); // Останавливаем пассивный скролл
            }
        };
    }, [isHovering, passiveScroll]); // Добавляем passiveScrollPosition в зависимости



    return [carouselRef, blockRef];
};
