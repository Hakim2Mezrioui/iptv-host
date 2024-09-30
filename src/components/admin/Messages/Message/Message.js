import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
    return (
        <React.Fragment>
            <div className={classes.message} style={{backgroundColor: props.backgroundColor, borderLeft: `.5em solid ${props.borderColor}`}}>
                <h4><b>exemple@gmail.com</b></h4>
                <p>
                    Le lorem ipsum est, en imprimerie, 
                    une suite de mots sans signification 
                    utilisée à titre provisoire pour calibrer
                    une mise en page, le texte définitif venant 
                    remplacer le faux-texte dès qu'il est prêt ou 
                    que la mise en page est achevée. Généralement, 
                    on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                </p>
                <div className="position-relative" style={{height: "2.5em"}}>
                    {/* <button className={classes.btn} style={{backgroundColor: props.borderColor, color: ""}}>Respond</button> */}
                    <a className={classes.btn} style={{backgroundColor: props.borderColor, color: ""}} href = "mailto:abc@example.com?subject = Feedback&body = Message">
                        Send Feedback
                    </a>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Message;