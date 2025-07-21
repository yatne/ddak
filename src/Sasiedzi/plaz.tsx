import paz from '../assets/img/pryk.jpg';
import {AnswerInput} from "../AnswerInput/AnswerInput";
import "./../JajoTytek/tyyek.css";

export const Plaz = ({onSuccess}) => {
    return (
        <div className="image-question-container">
            <img className='image' src={paz}/>
            <AnswerInput onSuccess={onSuccess} answers={[
                'płaz',
            ]}/>
        </div>
    )
}