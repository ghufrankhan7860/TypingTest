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
        <pre className="display-text"
            style={{
                width: '800px',
                height: '100px',
                overflow: 'auto',
                backgroundColor: '#f5f5f5',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap' // or 'pre' if you want horizontal scrolling
            }}>
            <code>
                {words}
            </code>
        </pre>
    )

}

export default DisplayText;