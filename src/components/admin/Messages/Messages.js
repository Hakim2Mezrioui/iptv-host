import classes from "./Message.module.css";
import Message from "./Message/Message";

const Messages = () => {
    return(
        <div className={`container ${classes.messages}`}>
            <Message borderColor="rgb(83, 109, 136)" backgroundColor="rgba(83, 109, 136, .7)" />
            <Message borderColor="rgb(23, 131, 68)" backgroundColor="rgba(23, 131, 68, .7)" />
            <Message borderColor="rgb(143, 19, 12)" backgroundColor="rgba(143, 19, 12, .7)" />
            <Message borderColor="rgb(138, 87, 0)" backgroundColor="rgba(138, 87, 0, .7)" />
            <Message borderColor="rgb(83, 109, 136)" backgroundColor="rgba(83, 109, 136, .7)" />
            <Message borderColor="rgb(23, 131, 68)" backgroundColor="rgba(23, 131, 68, .7)" />
            <Message borderColor="rgb(143, 19, 12)" backgroundColor="rgba(143, 19, 12, .7)" />
            <Message borderColor="rgb(138, 87, 0)" backgroundColor="rgba(138, 87, 0, .7)" />
            {/* <div className={classes.messages} style={{backgroundColor: "rgba(83, 109, 136, 0.765)", borderLeft: ".5em solid rgb(83, 109, 136)"}}>
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
            </div>
            <div className={classes.message} style={{backgroundColor: "rgba(23, 131, 68, .7)", borderLeft: ".5em solid rgb(23, 131, 68)"}}>
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
            </div> */}
        </div>
    )
}

export default Messages;