import {createContext, useState} from 'react';

export const TimerContext = createContext();

export const TimerContextProvider = ({children}) => {
    const [timeLeft, setTimeLeft] = useState(30);
    const [isRunning, setIsRunning] = useState(false);
    
    return (
        <TimerContext.Provider value={{timeLeft, setTimeLeft, isRunning, setIsRunning}}>
            {children}
        </TimerContext.Provider>
    )
}

