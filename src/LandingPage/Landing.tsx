import "./landing.css";
import "./landingPage.css";

import dupka from '../assets/img/wordart.png';
import {MapQuiz} from "../MapQuiz/MapQuiz";
import {useState} from "react";
import {JajoTytek} from "../JajoTytek/JajoTytek";
import {Sasiedzi} from "../Sasiedzi/Sasiedzi";
import {Plaz} from "../Sasiedzi/plaz";

import thx from '../assets/img/thx.png';
import gift from "../assets/img/prezent.png"

export const LandingPage = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="landing-layout">
            <div className="ddak">
                <img src={dupka}/>
                {step === 1 && (<MapQuiz onSuccess={() => setStep(2)}/>)}
                {step === 2 && (<JajoTytek onSuccess={() => setStep(3)}/>)}
                {step === 3 && (<Sasiedzi onSuccess={() => setStep(4)}/>)}
                {step === 4 && (<Plaz onSuccess={() => setStep(5)} />)}
                {step === 5 && (<>
                    <img src={thx}/>
                    <img src={gift}/>
                </>)}
            </div>
        </div>
    )
}