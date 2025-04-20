import TextContext from "./TextContext";
import { useEffect, useState } from "react";
import { wordAPI } from "../utils/config";
import { hardCodedText } from "../utils/config";

const TextContextProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [wordsLen, setWordsLen] = useState(0);
    const [completeText, setCompleteText] = useState("");
    const getText = async () => {
        const response = await fetch(wordAPI);
        const data = await response?.json();
        const joinedData = data.slice(0, wordsLen).join(" ");
        setText(joinedData);
        setCompleteText(joinedData);
    };

    useEffect(() => {
        // getText();

        setText(hardCodedText);
        setCompleteText(hardCodedText);
        setWordsLen(hardCodedText.length);
    }, []);

    return (
        <TextContext.Provider value={{ text, setText, completeText }}>
            {children}
        </TextContext.Provider>
    );
};

export default TextContextProvider;
