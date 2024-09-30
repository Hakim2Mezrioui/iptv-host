import { text } from "@fortawesome/fontawesome-svg-core";
import classes from "./Card.module.css";

const Card = (props) => {
    let bgColor;
    let textColor;

    switch (props.color) {
        case "red":
            bgColor = "bg-danger";
            textColor = "text-danger";
            break;
        case "green":
            bgColor = "bg-success";
            textColor = "text-success";
            break
        case "blue":
            bgColor = "blue";
            textColor = "text-primary";
            break
        case "yellow":
            bgColor = "bg-warning";
            textColor = "text-warning";
            break
        default:
            break;
    }
    return (            
        <div className={classes.card} style={{['border-left']: `.3em solid ${props.color == "yellow" ? "rgb(255, 193, 7)" : props.color == "blue" ? "rgb(13, 110, 253) ": props.color}`}}>
            <h6 className={`${ textColor }`}>{ props.title }</h6>
            <div class="progress">
                <div className={`progress-bar ${bgColor}`} role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
        </div>
    )
}

export default Card;