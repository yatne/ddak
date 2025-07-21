import sasiedzi from '../assets/img/sasiedzi.jpg';
import {AnswerInput} from "../AnswerInput/AnswerInput";
import "./../JajoTytek/tyyek.css";
import {useState} from "react";

export const Sasiedzi = ({onSuccess}) => {
    const [firstHint, setFirstHint] = useState(false)
    const [secondHint, setSecondHint] = useState(false)

    return (
        <div className="image-question-container">
            <img className='image' src={sasiedzi}/>
            <div>Pytanie Stacha: Jak sąsiedzi budują rzeczy?</div>
            {firstHint ? (<div> Czy tak jak trzeba? </div>) : (
                <div className="hidden-hint" onClick={() => setFirstHint(true)}>
                Podpowiedź 1
                </div>
            )}
            {secondHint ? (<div> Jan Brzechwa - "Kaczka ..." </div>) : (
                <div className="hidden-hint" onClick={() => setSecondHint(true)}>
                    Podpowiedź 2
                </div>
            )}
            <AnswerInput onSuccess={onSuccess} answers={[
                'Dziwacznie',
                'Nie tak jak trzeba',
            ]}/>
        </div>
    )
}