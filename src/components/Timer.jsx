import { useEffect, useRef } from "react";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TextContext from "../contexts/TextContext";
import { timeButtons } from "../utils/config";

import timeIcon from "/assets/images/time.png";
import punctuationIcon from "/assets/images/punctuation.png";
import numberIcon from "/assets/images/numbers.png";

import { resetTimer } from "../utils/helper";
import { ScoreContext } from "../contexts/ScoreContext";
import LastKeyContext from "../contexts/LastKeyContext";

const Timer = () => {
    // global variables
    const {
        timeLeft,
        setTimeLeft,
        isRunning,
        setIsRunning,
        timeId,
        setTimeId,
    } = useContext(TimerContext);

    const { setScore } = useContext(ScoreContext);

    // global variables
    const {
        text,
        setText,
        completeText,
        isPunctuation,
        isNumbers,
        setIsPunctuation,
        setIsNumbers,
    } = useContext(TextContext);

    // Add LastKeyContext
    const { setLastKey } = useContext(LastKeyContext);

    const buttonRef = useRef(null); // Create a ref for the button
    const interval = useRef(null);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            interval.current = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        }
        return () => clearInterval(interval.current);
    }, [timeLeft, isRunning]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsRunning(false);
        }
    }, [timeLeft]);

    const handleClick = () => {
        if (isRunning) {
            setIsRunning(false);
            clearInterval(interval.current);
        } else {
            setIsRunning(true);
        }

        // Remove focus from the button after clicking
        if (buttonRef.current) {
            buttonRef.current.blur();
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(1, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    const onBtnPress = (time, id) => {
        setTimeLeft(time);
        setIsRunning(false);
        clearInterval(interval.current);
        setText(completeText);
        setTimeId(id);
        setScore(0);
        setLastKey(null);
        setCorrectKey(null);
    };

    const getActiveBtn = (id) => {
        return timeId === id ? "text-custom-red-300" : "";
    };

    const getActivBtnClass = (btn) => {
        return btn ? "text-custom-red-300" : "";
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                {/* Punctuation  */}
                <div className="flex flex-row flex-wrap justify-center items-center gap-2 bg-custom-red-150 rounded-lg px-8 py-1">
                    <button
                        className={
                            "flex flex-row items-center text-lg font-bold text-custom-red-200 font-[montserrat] font-medium hover:text-custom-red-800 " +
                            getActivBtnClass(isPunctuation)
                        }
                        onClick={() => {
                            setIsPunctuation(!isPunctuation);
                            resetTimer(
                                setTimeLeft,
                                setIsRunning,
                                setText,
                                completeText,
                                timeId
                            );
                        }}
                    >
                        @ punctuation
                    </button>

                    <div className="text-lg font-bold text-custom-red-300 font-[montserrat] font-medium hover:text-custom-red-800">
                        |
                    </div>

                    {/* Numbers  */}
                    <button
                        className={
                            "flex flex-row items-center text-lg font-bold text-custom-red-200 font-[montserrat] font-medium hover:text-custom-red-800 " +
                            getActivBtnClass(isNumbers)
                        }
                        onClick={() => {
                            setIsNumbers(!isNumbers);
                            resetTimer(
                                setTimeLeft,
                                setIsRunning,
                                setText,
                                completeText,
                                timeId
                            );
                        }}
                    >
                        # numbers
                    </button>

                    <div className="text-lg font-bold text-custom-red-300 font-[montserrat] font-medium hover:text-custom-red-800">
                        |
                    </div>

                    {/* timer bar */}
                    <div className="flex flex-row items-center text-lg font-bold text-custom-red-300 font-[montserrat] font-medium hover:text-custom-red-800">
                        <img src={timeIcon} alt="timer" className="w-6 h-6" />
                        time
                    </div>
                    <div className="flex flex-row flex-wrap gap-3">
                        {timeButtons.map((button) => (
                            <button
                                key={button.time}
                                onClick={() =>
                                    onBtnPress(button.time, button.id)
                                }
                                className={
                                    "text-lg font-bold text-custom-red-200 font-[montserrat] font-medium px-2 rounded-lg hover:bg-custom-red-200 hover:text-custom-red-800 " +
                                    getActiveBtn(button.id)
                                }
                            >
                                {button.text}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-4xl p-2 font-[montserrat] font-medium text-custom-red-300">
                    {formatTime(timeLeft)}
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                    <button
                        ref={buttonRef}
                        onClick={handleClick}
                        className="text-lg font-bold text-custom-red-300 font-[montserrat] font-medium px-2 rounded-lg hover:bg-custom-red-200 hover:text-custom-red-800 w-[70px]"
                    >
                        {isRunning ? "Stop " : "Start"}
                    </button>
                    <button
                        onClick={() =>
                            resetTimer(
                                setTimeLeft,
                                setIsRunning,
                                setText,
                                completeText,
                                timeId,
                                interval.current,
                                setScore,
                                setLastKey,
                                null
                            )
                        }
                        className="text-lg font-bold text-custom-red-300 font-[montserrat] font-medium px-2 rounded-lg hover:bg-custom-red-200 hover:text-custom-red-800"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default Timer;
