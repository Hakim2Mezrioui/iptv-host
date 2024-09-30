import React from "react";
import Card from "../helper/Card";
import VisitorsConsumers from "../VisitorsConsumers/VisitorsConsumers";
import Evaluation from "../Evaluation/Evaluation";

const Statistique = () => {
    return(
        <React.Fragment>
            <div className="d-flex justify-content-center gap-5 mt-3">
                <Card title="Message" value="50%" color="red" />
                <Card title="Message" value="50%" color="yellow" />
                <Card title="Message" value="50%" color="green" />
                <Card title="Message" value="50%" color="blue" />
            </div>
            <div className="row container m-auto mt-5">
                <div className="col-5 m-auto">
                    <VisitorsConsumers />
                </div>
                <div className="col-5 m-auto">
                    <Evaluation />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Statistique;