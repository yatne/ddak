import {APIProvider, Map} from '@vis.gl/react-google-maps';
import './mapQuiz.css';
import {useState} from "react";
import {AnswerInput} from "../AnswerInput/AnswerInput";

type Answer = {
    id: number,
    lat: number,
    lng: number,
    name: string,
}

const ANSWERS: Answer[] = [
    {id : 1, lat: 52.18728140630977, lng: 21.014255599594907, name: `QBS`},
    {id : 2, lat: 52.221923256670976, lng: 21.001106605458073, name: "Bluesoft 1"},
    {id : 3, lat: 52.212368812615296, lng: 20.97138773320344, name: 'Bluesoft 2'},
    {id : 4, lat: 52.23734600805591, lng: 20.982220825821155, name: 'Bluesoft (PZU)'},
    {id : 5, lat: 52.22257140266985, lng: 20.978857610491122, name: 'Bluesoft 3'},
    {id : 6, lat: 52.131495375284736, lng: 21.070909258875176, name: 'Senfino 1'},
    {id : 7, lat: 52.246885666115354, lng: 21.063156510612608, name: 'Senfino 2'},
    {id : 8, lat: 52.233157236293835, lng: 21.013418066452267, name: "Polidea"},
    {id : 9, lat: 52.200228068255335, lng: 21.01285437968956, name: "Visuality"},
    {id : 10, lat: 52.228278886095275, lng: 21.000422760456367, name: "Box"}
]

const EPSILON = 0.0025;
// const EPSILON = 0.0325;

type AnswerState = Answer & {
    found: boolean;
}

export const MapQuiz = ({ onSuccess }) => {
    const [allFound, setAllFound] = useState(false);
    const [answers, setAnswers] = useState(ANSWERS.map(ans => {
        return {
            found: false,
            ...ans
        }
    }))

    const checkForAnswer = (lat: number, lng: number) => {
        answers.forEach(ans => {
            if (Math.abs(ans.lat - lat) < EPSILON && Math.abs(ans.lng - lng) < EPSILON) {
                handleFound(ans.id)
            }
        })
    }

    const handleFound = (id: number) => {
        setAnswers((prevState) => {
            const newState = prevState.map(ans => {
                if (ans.id === id) {
                    ans.found = true
                }
                return ans;
            });

            if (newState.find(ans => !ans.found) === undefined) {
                if (!allFound) {
                    setAllFound(true);
                    alert("hasło to: Jan Tatarowicz");
                }
            }

            return newState;
        })
    }

    return (
        <APIProvider apiKey={'AIzaSyDwkXMoS1LGkLbusCXGeVuZz13L0tRKot8'} onLoad={() => console.log('Maps API has loaded.')}>
            <div className="layout" >
                <div className="container">
                    <div className="title"> {allFound ? 'Jan Tatarowicz' : 'Gdzie Twój luby pracował?'} </div>
                    <div className="map-game">
                        <Map
                            className="map"
                            defaultZoom={15}
                            defaultCenter={ { lat: 52.24540581144077, lng: 20.965263946958785 } }
                            onCameraChanged={ (ev) =>
                                checkForAnswer(ev.detail.center.lat, ev.detail.center.lng)
                            }>
                        </Map>
                        <div className="vertical"/>
                        <div className="horizontal"/>

                        <div className="answer-table">
                            {answers.map((ans) => (
                                <div
                                key={ans.lat}
                                className={`answer ${ans.found ? 'found' : 'not-found'}`}
                                >
                                    {ans.found ? ans.name : '???'}
                                </div>
                            ))}

                        </div>
                    </div>
                    <AnswerInput answers={['Jan Tatarowicz']} onSuccess={onSuccess} />
                </div>
            </div>
        </APIProvider>
    )
}