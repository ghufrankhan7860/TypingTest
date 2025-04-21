import React, { useContext } from "react";
import { useState, useEffect } from "react";

import TextContext from "../contexts/TextContext";

const DisplayText = () => {
    const [words, setWords] = useState("");

    const { text } = useContext(TextContext);
    useEffect(() => {
        setWords(text);
    }, [text]);

    if (words.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex justify-center items-center h-48 relative">
            <pre className="h-auto w-auto overflow-hidden whitespace-pre-wrap">
                <code className="text-2xl font-bold text-custom-red-300 font-mono font-medium relative">
                    <span className="absolute animate-blink text-bittersweet font-black">
                        _
                    </span>
                    <span className="relative left-1">{words}</span>
                </code>
            </pre>
        </div>
    );
};

export default DisplayText;
