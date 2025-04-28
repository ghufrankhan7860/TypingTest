import React, { useContext } from "react";
import { useState, useEffect } from "react";
import TextContext from "../contexts/TextContext";

const DisplayText = () => {
    const [wordsArray, setWordsArray] = useState([]);

    const { text, isPunctuation, isNumbers, setIsPunctuation, setIsNumbers } =
        useContext(TextContext);

    useEffect(() => {
        setWordsArray(text.split(" "));
    }, [text, isPunctuation, isNumbers]);

    if (wordsArray.length === 0) {
        return (
            <div className=" flex flex-col justify-center items-center text-3xl font-light p-2 m-2 bg-custom-red-100 h-44 w-6xl rounded-lg">
                <div className="w-full h-30 bg-custom-red-150 rounded-xl animate-pulse"></div>
            </div>
        );
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
