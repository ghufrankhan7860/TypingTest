import { useContext, useState, useEffect } from "react";
import { ScoreContext } from "../contexts/scoreContext";
import { TimerContext } from "../contexts/timerContext";

const Score = () => {
    const [isOver, setIsOver] = useState(false);
    const { score } = useContext(ScoreContext);
    const { timeLeft, isRunning } = useContext(TimerContext);
    useEffect(() => {
        if (timeLeft === 0 && isRunning === false) {
            setIsOver(true);
        }
    }, [isRunning, timeLeft])
    return (
        <>
            {
                isOver ? <div className="score-container">
                    Score : {2 * score / 5} WPM;
                </div> : "Calculating..."
            }

        </>
    )
}

export default Score;