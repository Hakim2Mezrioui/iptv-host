import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping, faBars, faHome, faMemory, faContactBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../shared/logo.png";
import { useState } from "react";

const Header = () => {
    const [activeItem, setActiveItem] = useState("home");

    const onSetActiveItem = (itemName) => {
        setActiveItem(itemName)
    }

    return (
        <header className={classes.header}>
            <img src={logo} width="50" />
                <ul className={classes.links}>
                    <li>
                        <NavLink className={activeItem === "home" ? classes.active : null} onClick={() => onSetActiveItem("home")} activeClassName={classes.active} to="/" exact>
                            <FontAwesomeIcon className="me-2" icon={faHome} />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={activeItem === "subscription" ? classes.active : null} onClick={() => onSetActiveItem("subscription")} activeClassName={classes.active} to="/iptv-subscription" exact>
                            <FontAwesomeIcon className="me-2" icon={faMemory} />
                            IPTV Subscription
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={activeItem === "contact" ? classes.active : null} onClick={() => onSetActiveItem("contact")} activeClassName={classes.active} to="/contact" exact>
                            <FontAwesomeIcon className="me-2" icon={faPhone} />
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <span />
                {/* <ul>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faCartShopping} title="Cart"/>
                        </a>
                    </li>
                </ul> */}
                <button className={classes.faBars}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
        </header>
    )
}

export default Header;