import React, { useContext } from "react";
import { useState, useEffect } from "react";

import TextContext from "../contexts/TextContext";

const DisplayText = () => {
    const [words, setWords] = useState("");
    const [wordsArray, setWordsArray] = useState([]);

    const { text } = useContext(TextContext);
    useEffect(() => {
        setWords(text);
        setWordsArray(text.split(" "));
    }, [text]);

    if (words.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex justify-center items-center h-48 relative">
            <pre className="h-auto w-auto overflow-hidden whitespace-pre-wrap">
                <code className="text-4xl font-bold text-custom-red-300 font-mono font-medium relative">
                    <span className="absolute animate-blink text-bittersweet font-black">
                        _
                    </span>
                    <span className="relative overflow-hidden max-w-6xl inline-block truncate">
                        {wordsArray.map((word, index) => (
                            <span key={index}>
                                <span>{word}</span>
                                <span className="opacity-20">
                                    {index < wordsArray.length - 1 && "_"}
                                </span>
                            </span>
                        ))}
                    </span>
                </code>
            </pre>
        </div>
    );
};

export default DisplayText;
