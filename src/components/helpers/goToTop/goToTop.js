import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./goToTop.module.css";
import { useEffect, useState } from "react";

let GoToTop = () => {
    const [isShow, setIsShow] = useState(false);

    const checkIsInTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    window.onscroll = () => {
        if (window.pageYOffset === 0) {
            setIsShow(false);
        } else setIsShow(true);
    }

    return (
        isShow &&
        (
            <button onClick={checkIsInTop} className={classes.btn}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        )
    )
}

export default GoToTop;