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
        <div className="flex justify-center items-center h-32 sm:h-36 md:h-40 lg:h-48 relative w-full [@media(max-width:700px)]:h-36 ">
            <pre className="h-auto w-full overflow-hidden whitespace-pre-wrap px-2">
                <code className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-red-300 font-mono font-medium relative [@media(max-height:640px)]:text-4xl [@media(max-width:700px)]:text-3xl">
                    <span className="absolute animate-blink text-bittersweet font-black">
                        _
                    </span>
                    <span className="relative overflow-hidden w-full inline-block truncate">
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
