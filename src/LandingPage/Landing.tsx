import "./landing.css";
import "./landingPage.css";

import dupka from '../assets/img/wordart.png';
import {MapQuiz} from "../MapQuiz/MapQuiz";
export const LandingPage = () => {
    return (
        <div className="landing-layout">
            <div className="ddak">
                <img src={dupka}/>
                <MapQuiz onSuccess={() => console.log("sukces!!")}/>
            </div>
        </div>
    )
}