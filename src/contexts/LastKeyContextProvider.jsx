import { useState, useEffect, useContext } from "react";
import LastKeyContext from "./LastKeyContext";
import TextContext from "./TextContext";
import { TimerContext } from "./TimerContext";
import { ScoreContext } from "./ScoreContext";

const LastKeyContextProvider = ({ children }) => {
    const [lastKey, setLastKey] = useState(null);

    const [isShiftPressed, setIsShiftPressed] = useState(false);
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);
    const [isCorrectKey, setIsCorrectKey] = useState(null);
    const { text, setText } = useContext(TextContext);
    const { isRunning } = useContext(TimerContext);

    const { score, setScore } = useContext(ScoreContext);
    useEffect(() => {
        const handleKeyDown = (e) => {
            // console.log(text);
            setLastKey(e.key);
            // console.log("Key Pressed : " + e.key);
            // console.log(lastKey);

            if (e.key === "Shift") {
                setIsShiftPressed(true);
            }
            if (e.getModifierState("CapsLock")) {
                setIsCapsLockOn(true);
            } else {
                setIsCapsLockOn(false);
            }

            if (e.key === text[0]) {
                setText(text.slice(1));
                setIsCorrectKey(true);
                setScore(score + 1);

                // console.log("Correct Key Pressed : "+e.key);
            } else {
                setIsCorrectKey(false);

                // console.log("Wrong Key Pressed : "+e.key);
            }
        };

        const handleKeyUp = (e) => {
            if (e.key === "Shift") {
                setIsShiftPressed(false);
            }
        };

        if (isRunning) {
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("keyup", handleKeyUp);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [text, setText, isCorrectKey, isRunning]);

    return (
        <LastKeyContext.Provider
            value={{
                lastKey,
                setLastKey,
                isShiftPressed,
                setIsShiftPressed,
                isCapsLockOn,
                setIsCapsLockOn,
                isCorrectKey,
                setIsCorrectKey,
            }}
        >
            {children}
        </LastKeyContext.Provider>
    );
};

export default LastKeyContextProvider;
