import { useContext, useEffect, useState } from "react";
import LastKeyContext from "../contexts/LastKeyContext";
import TextContext from "../contexts/TextContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { TimerContext } from "../contexts/TimerContext";
import { wordChecker } from "../utils/helper";
import { keyChars } from "../utils/config";

const KeyBoard = () => {
    const { lastKey, setLastKey, isCorrectKey } = useContext(LastKeyContext);

    const { text, setText } = useContext(TextContext);
    const { isRunning } = useContext(TimerContext);
    const { score, setScore } = useContext(ScoreContext);

    const correct = " text-lg bg-green-200 text-green-800 px-3 py-1 rounded-sm hover:text-custom-red-800 hover:border-0 m-1 light:bg-green-200 dark:bg-green-200 dark:text-green-800";

    const incorrect =
        " text-lg bg-custom-red-300 text-custom-red-800 px-3 py-1 rounded-sm hover:text-custom-red-800 hover:border-0 m-1";
    const getButtonClass = (btn) => {
        let btnClass = "";

        if (btn === lastKey) {
            btnClass += isCorrectKey ? correct : incorrect;
        }
        if (lastKey === " " && btn === "space") {
            btnClass += isCorrectKey ? correct : incorrect;
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

        setcorrectKey(check);
    };

    return (
        <div className="flex flex-col justify-center items-center border-1 border-custom-red-200 rounded-sm [@media(max-height:680px)]:hidden  [@media(max-width:700px)]:h-64 [@media(max-width:700px)]:w-full [@media(min-width:700px)]:p-3 dark:border-neutral-50 light:border-neutral-600">
            {keyChars.map((row, index) => {
                if (row == "space") {
                    return (
                        <button
                            className={
                                getButtonClass(row) +
                                " text-lg font-bold px-10 py-1 bg-white text-bittersweet rounded-sm hover:text-custom-red-800 hover:border-0 m-1 [@media(max-width:700px)]:px-20 [@media(max-width:700px)]:py-1 dark:bg-neutral-600 light:bg-neutral-200 light:text-neutral-600 dark:text-neutral-50 "
                            }
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
                    <div
                        className="flex flex-row flex-wrap justify-center"
                        key={"row" + index}
                    >
                        {row.map((char, idx) => {
                            return (
                                <button
                                    className={
                                        " text-lg font-bold px-3 py-1 bg-custom-red-200 text-custom-red-100 rounded-sm hover:text-custom-red-800 hover:border-0 m-1 [@media(max-width:700px)]:text-md [@media(max-width:700px)]:px-[11px] [@media(max-width:700px)]:py-2.5 [@media(max-width:700px)]:mx-0.5 [@media(max-width:700px)]:my-2 light:bg-neutral-500 dark:bg-neutral-50 dark:text-neutral-600 light:text-neutral-50 " +
                                        getButtonClass(char)
                                    }
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
