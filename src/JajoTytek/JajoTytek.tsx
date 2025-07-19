import sjst from '../assets/img/sjst.png';
import {AnswerInput} from "../AnswerInput/AnswerInput";

export const JajoTytek = ({onSuccess}) => {
    return (
        <div className="image-question-container">
            <img className='image' src={sjst}/>
            <AnswerInput onSuccess={onSuccess} answers={[
                'SuperJajo i SuperTytek',
                'superjajo supertytek',
                'supertytek i superjajo',
                'supertytek superjajo',
            ]}/>
        </div>
    )
}