import { useEffect, useRef } from "react";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TextContext from "../contexts/textContext";
import { timeButtons } from "../utils/config";
import timeIcon from "../../public/assets/images/time.png";

const Timer = () => {
    // global variables
    const { timeLeft, setTimeLeft, isRunning, setIsRunning } =
        useContext(TimerContext);

    // global variables
    const { text, setText, completeText } = useContext(TextContext);

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

    const onBtnPress = (time) => {
        setTimeLeft(time);
        setIsRunning(false);
        clearInterval(interval.current);
        setText(completeText);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row flex-wrap justify-center items-center gap-2 bg-custom-red-150 rounded-lg px-8 py-1">
                    <div className="flex flex-row items-center text-lg font-bold text-custom-red-300 font-[montserrat] font-medium hover:text-custom-red-800">
                        <img src={timeIcon} alt="timer" className="w-6 h-6" />
                        time
                    </div>
                    <div className="flex flex-row flex-wrap gap-3">
                        {timeButtons.map((button) => (
                            <button
                                key={button.time}
                                onClick={() => onBtnPress(button.time)}
                                className="text-lg font-bold text-custom-red-300 font-[montserrat] font-medium px-2 rounded-lg hover:bg-custom-red-200 hover:text-custom-red-800"
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
                        className="text-lg font-bold text-custom-red-300 font-[montserrat] font-medium px-2 rounded-lg hover:bg-custom-red-200 hover:text-custom-red-800"
                    >
                        {isRunning ? "Stop " : "Start"}
                    </button>
                    <button
                        onClick={() => {
                            setTimeLeft(30);
                            setIsRunning(false);
                            clearInterval(interval.current);
                            setText(completeText);
                        }}
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
