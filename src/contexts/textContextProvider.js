import TextContext from "./textContext";
import { useEffect, useState } from "react";
import { wordAPI } from "../utils/config";

const TextContextProvider = ({children})=>{
    const [text, setText] = useState('');
    const [wordsLen, setWordsLen] = useState(30);

    const getText = async ()=>{
        const response = await fetch(wordAPI);
        const data = await response?.json();
        const joinedData = data.slice(0, wordsLen).join(' ');
        setText(joinedData);
    }

    useEffect(()=>{
        getText();
    },[])

    return (
        <TextContext.Provider value={{text, setText}}>
            {children}
        </TextContext.Provider>
    )

}

export default TextContextProvider;