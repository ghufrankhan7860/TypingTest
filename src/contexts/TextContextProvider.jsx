import TextContext from "./TextContext";
import { useEffect, useState } from "react";
import { wordAPI } from "../utils/config";
import {
    simpleText,
    punctuationText,
    numbersText,
    paragraphText,
} from "../utils/config";

const TextContextProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [wordsLen, setWordsLen] = useState(0);
    const [completeText, setCompleteText] = useState("");
    const [isPunctuation, setIsPunctuation] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);

    const getText = async () => {
        const response = await fetch(wordAPI);
        const data = await response?.json();
        const joinedData = data.slice(0, wordsLen).join(" ");
        setText(joinedData);
        setCompleteText(joinedData);
    };

    useEffect(() => {
        // getText();

        setText(simpleText);
        setCompleteText(simpleText);
        setWordsLen(simpleText.length);
    }, []);

    return (
        <TextContext.Provider
            value={{
                text,
                setText,
                completeText,
                isPunctuation,
                setIsPunctuation,
                isNumbers,
                setIsNumbers,
            }}
        >
            {children}
        </TextContext.Provider>
    );
};

export default TextContextProvider;
