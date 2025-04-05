import React, { useContext } from "react";
import { useState, useEffect } from "react";

import TextContext from "../contexts/textContext";

const DisplayText = ()=>{

    const [words, setWords] = useState('');

    const {text} = useContext(TextContext);
    useEffect(() => {
        setWords(text);
    }, [text]);

    if(words.length === 0){
        return <p>Loading...</p>
    }

    return(
        <pre className="display-text">
            <code>
                {words}
            </code>
        </pre>
    )

}

export default DisplayText;