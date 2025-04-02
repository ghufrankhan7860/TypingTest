import React from 'react';
import ReactDOM from 'react-dom/client';
import DisplayText from './displayText';
import KeyBoard from './keyboard';
import TextContextProvider from '../contexts/textContextProvider';
import LastKeyContextProvider from '../contexts/lastKeyContextProvider';
import { TimerContextProvider } from '../contexts/timerContext';
import Timer from './timer';
import { ScoreContextProvider } from '../contexts/scoreContext';
import Score from './score';


const App = () => {
    return (
        <>
            <TimerContextProvider>
                <TextContextProvider>
                    <ScoreContextProvider>
                        <LastKeyContextProvider>
                            <Timer />
                            <Score />
                            <DisplayText />
                            <KeyBoard />

                        </LastKeyContextProvider>
                    </ScoreContextProvider>
                </TextContextProvider>
            </TimerContextProvider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);