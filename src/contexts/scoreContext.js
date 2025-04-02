import { createContext, useState, useEffect } from "react";

export const ScoreContext = createContext(null);

export const ScoreContextProvider = ({ children }) => {        
    const [score, setScore] = useState(0);

    return (
        <ScoreContext.Provider value={{ score, setScore }}>
            {children}
        </ScoreContext.Provider>
    )

}

