import {useState} from "react";
import './answerInput.css'

export const AnswerInput = ({ answers, onSuccess }) => {
    const [value, setValue] = useState('')

    const checkAnswers = (val: string) => {
        answers.forEach(ans => {
            if (ans.toLowerCase() === val.toLowerCase()) {
                onSuccess();
            }
        })
    }

    const handleChangeValue = (val: string) => {
        checkAnswers(val);
        setValue(val);
    }

    return (
        <div>
            Hasło:
            <input className="answer-input" value={value} onChange={(e) => handleChangeValue(e.target.value)} />
        </div>
    )
}

