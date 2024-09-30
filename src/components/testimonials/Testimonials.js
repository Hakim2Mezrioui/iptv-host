import React from "react";

import classes from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Heading from "../helpers/heading/Heading";

const Testimonials = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Heading title="Customer Viwers" />
            </div>
            <section className={classes.testimonials}>
                <div className={classes.testimonial}>
                    <div className={`${classes.quotes}`}>
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                    Le lorem ipsum est, en imprimerie, 
                    une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, 
                    le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                    Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    <div className={classes.back}></div>
                </div>
                <div className={classes.testimonial}>
                    <div className={`${classes.quotes}`}>
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                    Le lorem ipsum est, en imprimerie, 
                    une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, 
                    le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                    Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    <div className={classes.back}></div>
                </div>
                <div className={classes.testimonial}>
                    <div className={`${classes.quotes}`}>
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                    Le lorem ipsum est, en imprimerie, 
                    une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, 
                    le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                    Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    <div className={classes.back}></div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Testimonials;