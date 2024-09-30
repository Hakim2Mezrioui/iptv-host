import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <ul>
                <li>
                    <Link to={"/dashboard"}>Home</Link>
                </li>
                <li>
                    <Link to={"profile"}>Profile</Link>
                </li>
                <li>
                    <Link to={"editAbonnement"}>Edit EditAbonnement</Link>
                </li>
                <li>
                    <Link to={"Messages"}>Messages</Link>
                </li>
            </ul>
            <span>
                <Link to="#">Logout</Link>
            </span>
        </header>
    );
}

export default Header;