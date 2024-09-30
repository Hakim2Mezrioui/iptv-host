import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping, faBars, faHome, faMemory, faContactBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../shared/logo.png";
import { useCallback, useContext, useState } from "react";
import IptvContext from "../context/Iptv";

const Header = () => {
    const [activeItem, setActiveItem] = useState("home");

    const onSetActiveItem = (itemName) => {
        setActiveItem(itemName)
    }

    const ctx = useContext(IptvContext);

    return (
        <header className={classes.header}>
            <img src={logo} width="50" />
                <ul className={classes.links}>
                    <li>
                        {/* <NavLink className={activeItem === "home" ? classes.active : null} onClick={() => onSetActiveItem("home")} activeClassName={classes.active} to="/" exact>
                            <FontAwesomeIcon className="me-2" icon={faHome} />
                            Home
                        </NavLink> */}
                        <a href="#" onClick={() => ctx.scrollToSection(ctx.homeSection)}>Home</a>
                    </li>
                    <li>
                        {/* <NavLink onClick={() => {ctx.scrollToSection(ctx.subscriptionSection)}} className={activeItem === "subscription" ? classes.active : null} onClick={() => onSetActiveItem("subscription")} activeClassName={classes.active} to="#" exact>
                            <FontAwesomeIcon className="me-2" icon={faMemory} />
                            IPTV Subscription
                        </NavLink> */}
                        <a href="#subscription" onClick={() => ctx.scrollToSection(ctx.subscriptionSection)}>IPTV Subscription</a>
                    </li>
                    <li>
                        {/* <NavLink className={activeItem === "contact" ? classes.active : null} onClick={() => onSetActiveItem("contact")} activeClassName={classes.active} to="#contact" exact>
                            <FontAwesomeIcon className="me-2" icon={faPhone} />
                            Contact Us
                        </NavLink> */}
                        <a href="#contact" onClick={() => ctx.scrollToSection(ctx.contactSection)}>Contact</a>
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