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
        <div className="display-text">
            {words}
        </div>
    )

}

export default DisplayText;