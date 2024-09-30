import IptvContext from "../context/Iptv";
import classes from "./Admin.module.css";
import React, { useContext, useEffect, useRef, useState } from "react";

let Admin = () => {
    const ctx = useContext(IptvContext);
    useEffect(() => {
        ctx.checkAdminPage(true);
        onCheckValues();
    }, []);

    const [usernameVal, setUsernameVal] = useState();
    const [passwordVal, setpasswordVal] = useState();

    const onCheckValues = () => {
        setUsernameVal(username.current.value);
        setpasswordVal(password.current.value);
    }

    const username = useRef();
    const password = useRef();

    return (
        <React.Fragment>
            <div className={classes.backGround}></div>
            <form className={classes["form-auth"]}>
                <span></span>
                <div className={classes["form-group"]}>
                    <input id="username" onBlur={onCheckValues} ref={username} />
                    <label htmlFor="username" className={`${usernameVal == "" ? "" : classes.notEmpty}`}>Username</label>
                </div>
                <div className={classes["form-group"]}>
                    <input onBlur={onCheckValues} id="passowrd" type="password" ref={password} />
                    <label htmlFor="password" className={`${passwordVal == "" ? "" : classes.notEmpty}`}>Password</label>
                </div>
                <div className={classes["form-buttons"]}>
                    <button >Confirm</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Admin;