import { useContext, useState, useEffect, useRef } from "react";
import { ScoreContext } from "../contexts/scoreContext";
import { TimerContext } from "../contexts/TimerContext";

const Score = () => {
    const [isOver, setIsOver] = useState(false);
    const { score } = useContext(ScoreContext);
    const { timeLeft, isRunning } = useContext(TimerContext);
    const timeLimit = useRef(null);
    timeLimit.current = timeLeft;
    useEffect(() => {
        if (timeLeft === 0 && isRunning === false) {
            setIsOver(true);
        }
    }, [isRunning, timeLeft]);
    const calculateScore = () => {
        return ((60 / timeLimit.current) * score) / 5;
    };
    return (
        <div className="text-2xl font-bold">
            {isOver ? (
                <div className="">Score : {calculateScore()} WPM;</div>
            ) : (
                "Calculating..."
            )}
        </div>
    );
};

export default Score;
