import sjst from '../assets/img/sjst.png';
import {AnswerInput} from "../AnswerInput/AnswerInput";
import "./tyyek.css";

export const JajoTytek = ({onSuccess}) => {
    return (
        <div className="image-question-container">
            <img className='image' src={sjst}/>
            <AnswerInput onSuccess={onSuccess} answers={[
                'SuperJajo i SuperTytek',
                'superjajo supertytek',
                'supertytek i superjajo',
                'supertytek superjajo',
                'Super jajo i Super tytek',
                'Super jajo Super tytek',
                'Super tytek i Super jajo',
                'Super tytek Super jajo',
            ]}/>
        </div>
    )
}