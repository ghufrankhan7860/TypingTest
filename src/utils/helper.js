import { timeButtons } from "./config";
import {
    simpleText,
    punctuationText,
    numbersText,
    paragraphText,
} from "./config";

export const wordChecker = (
    btn,
    lastKey,
    setLastKey,
    text,
    setText,
    isRunning,
    score,
    setScore
) => {
    setLastKey(btn);
    if (isRunning) {
        if (btn === text[0]) {
            setLastKey(text[0]);
            setText(text.slice(1));
            setScore(score + 1);
            return true;
        } else {
            return false;
        }
    }
};

export const resetTimer = (
    setTimeLeft,
    setIsRunning,
    setText,
    completeText,
    timeId,
    interval,
    setScore,
    setLastKey,
    setCorrectKey
) => {
    setTimeLeft(timeButtons[timeId].time);
    setIsRunning(false);
    clearInterval(interval);
    setText(completeText);
    setScore(0);
    setLastKey(null);
    setCorrectKey(null);
};

export const getText = (isPunctuation, isNumbers) => {
    if (isPunctuation && isNumbers) {
        return paragraphText;
    } else if (isPunctuation) {
        return punctuationText;
    } else if (isNumbers) {
        return numbersText;
    } else {
        return simpleText;
    }
};
