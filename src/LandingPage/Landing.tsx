import "./landing.css";
import "./landingPage.css";

import dupka from '../assets/img/wordart.png';
import {MapQuiz} from "../MapQuiz/MapQuiz";
import {useState} from "react";
import {JajoTytek} from "../JajoTytek/JajoTytek";
export const LandingPage = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="landing-layout">
            <div className="ddak">
                <img src={dupka}/>
                {step === 1 && (<MapQuiz onSuccess={() => setStep(2)}/>)}
                {step === 2 && (<JajoTytek onSuccess={() => setStep(3)}/>)}

            </div>
        </div>
    )
}