import { useContext, useState, useEffect, useRef } from "react";
import { ScoreContext } from "../contexts/ScoreContext";
import { TimerContext } from "../contexts/TimerContext";
import { timeButtons } from "../utils/config";

const Score = () => {
    const [isOver, setIsOver] = useState(false);
    const { score, setScore } = useContext(ScoreContext);
    const { timeLeft, isRunning, timeId, setTimeId } = useContext(TimerContext);

    useEffect(() => {
        if (timeLeft === 0 && isRunning === false) {
            setIsOver(true);
        }
    }, [isRunning, timeLeft]);
    const calculateScore = () => {
        return (
            ((60 / (timeButtons[timeId].time - timeLeft)) * score) /
            6
        ).toFixed(2);
    };
    return (
        <div className="flex flex-row gap-2 mt-2 p-2 items-baseline">
            <span className="text-3xl sm:text-6xl md:text-7xl text-custom-red-300 font-[moderna_sans]">
                {score === 0 ? "0" : calculateScore()}
            </span>
            <span className="text-xl sm:text-xl md:text-2xl font-[poppins] text-bittersweet">
                WPM
            </span>
        </div>
    );
};

export default Score;
