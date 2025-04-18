import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { TimerContext } from '../contexts/timerContext';
import TextContext from '../contexts/textContext';

const Timer = () => {
    const { timeLeft, setTimeLeft, isRunning, setIsRunning } = useContext(TimerContext);
    const { text, setText, completeText } = useContext(TextContext);

    const buttonRef = useRef(null); // Create a ref for the button
    let interval = null;

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timeLeft, isRunning]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsRunning(false);
        }
    }, [timeLeft]);

    const handleClick = () => {
        if (isRunning) {
            setIsRunning(false);
            clearInterval(interval);
        } else {
            setIsRunning(true);
        }

        // Remove focus from the button after clicking
        if (buttonRef.current) {
            buttonRef.current.blur();
        }
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div className="timer">
                <h2>Timer</h2>
                
                <input type='text' placeholder='Enter time in seconds' value={timeLeft} onChange={(e)=>{
                    setTimeLeft(e.target.value);
                }}/>

                <p>{formatTime(timeLeft)}</p>

                <button
                    ref={buttonRef}
                    onClick={handleClick}
                >
                    {isRunning ? 'Stop' : "Start"}
                </button>
                <button onClick={() => {
                    setTimeLeft(180);
                    setIsRunning(false);
                    clearInterval(interval);
                    setText(completeText);
                }}> Reset</button>
            </div>
        </>
    )
}

export default Timer;