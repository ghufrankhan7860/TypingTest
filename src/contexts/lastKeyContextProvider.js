import { useState, useEffect, useContext } from "react";
import LastKeyContext from "./lastKeyContext";
import TextContext from "./textContext";


const LastKeyContextProvider = ({ children }) => {
    
    const [lastKey, setLastKey] = useState(null);
    const [isShiftPressed, setIsShiftPressed] = useState(false);
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);
    const [isCorrectKey, setIsCorrectKey] = useState(true);
    const {text, setText} = useContext(TextContext);
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            setLastKey(e.key);   

            if (e.key === "Shift") {
                setIsShiftPressed(true);
            }
            if (e.getModifierState("CapsLock")) {
                setIsCapsLockOn(true);
            }else{
                setIsCapsLockOn(false);
            }

            if(e.key === text[0]){
                setText(text.slice(1));
                setIsCorrectKey(true);
                console.log("Correct Key Pressed : "+e.key);
            }
            else{
                setIsCorrectKey(false);
                console.log("Wrong Key Pressed : "+e.key);
            }
        
        }

        const handleKeyUp = (e) => {
            if (e.key === 'Shift') {
                setIsShiftPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [text, setText,isCorrectKey]);
    
    return (
        <LastKeyContext.Provider value={{lastKey, setLastKey, isShiftPressed, setIsShiftPressed, isCapsLockOn, setIsCapsLockOn, isCorrectKey, setIsCorrectKey}}>
            {children}
        </LastKeyContext.Provider>
    )
}

export default LastKeyContextProvider;