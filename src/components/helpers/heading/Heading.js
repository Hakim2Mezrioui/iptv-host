import classes from "./Heading.module.css";

const Heading = (props) => {
    return (
        <div className={`${classes.heading} `}>
            <h3 className={classes.h5}>{props.title}</h3>
        </div>
    )
}

export default Heading;