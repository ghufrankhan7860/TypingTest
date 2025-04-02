import React from 'react';
import ReactDOM from 'react-dom/client';
import DisplayText from './displayText';
import KeyBoard from './keyboard';
import TextContextProvider from '../contexts/textContextProvider';
import LastKeyContextProvider from '../contexts/lastKeyContextProvider';
import { TimerContextProvider } from '../contexts/timerContext';
import Timer from './timer';


const App = () => {
    return (
        <>
            <TimerContextProvider>
                <TextContextProvider>
                    <LastKeyContextProvider>
                        <Timer />
                        <DisplayText />
                        <KeyBoard />

                    </LastKeyContextProvider>
                </TextContextProvider>
            </TimerContextProvider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);