import { useContext, useEffect, useState } from "react";
import LastKeyContext from "../contexts/LastKeyContext";
import TextContext from "../contexts/TextContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { TimerContext } from "../contexts/TimerContext";
import { wordChecker } from "../utils/helper";

const KeyBoard = () => {
    const keyChars = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["z", "x", "c", "v", "b", "n", "m"],
        "space",
    ];

    const [correctKey, setcorrectKey] = useState(null);

    const { lastKey, setLastKey, isCorrectKey } = useContext(LastKeyContext);

    const { text, setText } = useContext(TextContext);
    const { isRunning } = useContext(TimerContext);
    const { score, setScore } = useContext(ScoreContext);

    const getButtonClass = (btn) => {
        let btnClass = "char-btn";

        if (btn === lastKey) {
            btnClass +=
                isCorrectKey || correctKey ? " correct-key" : " incorrect-key";
        }
        if (lastKey === " " && btn === "space") {
            btnClass +=
                isCorrectKey || correctKey ? " correct-key" : " incorrect-key";
        }
        if (btn === "space") {
            btnClass += " space";
        }

        return btnClass;
    };

    const handleClick = (btn) => {
        const check = wordChecker(
            btn,
            lastKey,
            setLastKey,
            text,
            setText,
            isRunning,
            score,
            setScore
        );
        console.log(check + " Correct touch or not ? ");
        setcorrectKey(check);
    };

    return (
        <div className="">
            {keyChars.map((row, index) => {
                if (row === "space") {
                    return (
                        <button
                            className={getButtonClass(row)}
                            key={"space-row" + index}
                            onClick={() => {
                                handleClick(" ");
                            }}
                        >
                            Space
                        </button>
                    );
                }

                return (
                    <div className="" key={"row" + index}>
                        {row.map((char, idx) => {
                            return (
                                <button
                                    className={getButtonClass(char)}
                                    key={char + idx}
                                    onClick={() => handleClick(char)}
                                >
                                    {char}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default KeyBoard;
