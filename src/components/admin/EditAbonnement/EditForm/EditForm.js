import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./EditForm.module.css";
import { useParams } from "react-router-dom";
import IptvContext from "../../../context/Iptv";

let EditForm = () => {
    const params = useParams();
    const ctx = useContext(IptvContext);

    useEffect(() => {
        // setValues({
        //     title: ctx.abonnement.name,
        //     duration: ctx.abonnement.duration,
        //     price: ctx.abonnement.price
        // });
    }, [])

    
    // const [values, setValues] = useState({});
    
    // let titleVal = useRef(values.title);
    // let durationVal = useRef(values.duration);
    // let priceVal = useRef(values.price);

    return (
        <React.Fragment>
            <div className={classes.back}></div>
            <form className={classes.editForm}>
                <div className={classes["form-group"]}>
                <div className={classes.stitic}></div>
                    <label className={classes["form-label"]} htmlFor="name">Name</label>
                    <input className="form-control is-valid" id="name" required/>
                </div>
                <div className="d-flex gap-4">
                    <div  className={classes["form-group"]}>
                        <label className={classes["form-label"]} htmlFor="duration">Duration</label>
                        <input type="number" maxLength={1} className="form-control is-valid" id="duration" required/>
                    </div>
                    <div  className={classes["form-group"]}>
                        <label className={classes["form-label"]} htmlFor="price">Price</label>
                        <input type="number" min={0} max={1000} className="form-control is-valid" id="price" required/>
                    </div>
                </div>
                <div className={classes["form-btns"]}>
                    <button className="btn btn-outline-success">Confirm</button>|
                    <button onClick={() => window.history.back()} type="button" className="btn btn-danger">Cancel</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default EditForm;