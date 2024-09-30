import { Fragment } from "react";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

let Cart = () => {
    return (
        <Fragment>
            <div className={classes.background}></div>
            <div className={`${classes.cart}`}>
                <div className="row">
                    <div className="col-md-8 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="pb-4"><b>Shopping Cart</b></h4>
                            <p>3 items</p>
                        </div>
                        <hr className="m-0"></hr>
                        <ul className={classes["list-items"]}>
                            <li className={classes.item}>
                                <img src="https://placehold.co/80x80" />
                                <p>Title</p>
                                <span>
                                    <button>-</button>
                                    <input value={1} />
                                    <button>+</button>
                                </span>
                                <p>$44.00</p>
                                <button><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                            </li>
                            <li className={classes.item}>
                                <img src="https://placehold.co/80x80" />
                                <p>Title</p>
                                <span>
                                    <button>-</button>
                                    <input value={1} />
                                    <button>+</button>
                                </span>
                                <p>$44.00</p>
                                <button><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                            </li>
                            <li className={classes.item}>
                                <img src="https://placehold.co/80x80" />
                                <p>Title</p>
                                <span>
                                    <button>-</button>
                                    <input value={1} />
                                    <button>+</button>
                                </span>
                                <p>$44.00</p>
                                <button><FontAwesomeIcon icon={faX} /></button>
                            </li>
                        </ul>
                    </div>
                    <form className="col-md-4">
                        <h4>Summary</h4>
                        <hr />
                        <p>ITEMS x $132.00</p>
                        <input />
                    </form>
                </div>
                <div className="row">
                    <button>Back Shopping</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Cart;