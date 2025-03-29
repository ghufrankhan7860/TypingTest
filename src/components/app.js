import React from 'react';
import ReactDOM from 'react-dom/client';
import DisplayText from './displayText';
import KeyBoard from './keyboard';
import TextContextProvider from '../contexts/textContextProvider';
import LastKeyContextProvider from '../contexts/lastKeyContextProvider';

const App = () => {
    return (
        <>
            <TextContextProvider>
                <LastKeyContextProvider>
                    <DisplayText />
                    <KeyBoard />
                </LastKeyContextProvider>
            </TextContextProvider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);