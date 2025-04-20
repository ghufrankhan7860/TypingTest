import { createContext, useState } from "react";
import { timeButtons } from "../utils/config";
export const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
    const [timeLeft, setTimeLeft] = useState(timeButtons[0].time);
    const [isRunning, setIsRunning] = useState(false);

    return (
        <TimerContext.Provider
            value={{ timeLeft, setTimeLeft, isRunning, setIsRunning }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export default TimerContextProvider;
