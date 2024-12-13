import React, {useEffect, useRef, useState} from "react";
import {useScrollbar} from "../../../hooks/useScrollbar";
import ModalWindow from "./ModalWindow";
import cl from "../TagsItem/TagsItem.module.css";

const TagModal = ({tags, fullDescription, close}) => {
    const [hasScroll, setHasScroll] = useState(false)
    const scroll = useRef();
    useScrollbar(scroll, {}, hasScroll)

    useEffect(() => {
        if (scroll.current){
            if (scroll.current.clientHeight > 560)
            {
                setHasScroll(true);
            }
            else
            {
                setHasScroll(false);
            }
        }
    }, []);

    return (
        <ModalWindow close={close}>
            <div ref={scroll}>
                <div className={cl.modal}>
                    <h5 className={cl.tags}>{tags.join(' ')}</h5>
                    <p className={cl.description}>{fullDescription}</p>
                </div>
            </div>
        </ModalWindow>
    )
}
export default TagModal