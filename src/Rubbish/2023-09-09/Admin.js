import IptvContext from "../context/Iptv";
import classes from "./Admin.module.css";
import React, { useContext, useEffect, useRef } from "react";

let Admin = () => {
    const ctx = useContext(IptvContext);
    useEffect(() => {
        ctx.checkAdminPage(true);
    }, []);

    // const formValues = 

    const username = useRef();
    const password = useRef();

    return (
        <React.Fragment>
            <div className={classes.backGround}></div>
            <form className={classes["form-auth"]}>
                <span></span>
                <div className={classes["form-group"]}>
                    <input ref={username} />
                    <label className={username.current.value ? classes.notEmpty : ''}>Username</label>
                </div>
                <div className={classes["form-group"]}>
                    <input ref={password} />
                    <label>Password</label>
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