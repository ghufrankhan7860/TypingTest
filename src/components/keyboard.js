import { useContext, useState, useEffect } from "react";
import LastKeyContext from "../contexts/lastKeyContext";

const KeyBoard = () => {
    const keyChars = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'],['z','x','c','v','b','n','m'], 'space'];
    
    const {lastKey, isCorrectKey} = useContext(LastKeyContext);
    const getButtonClass = (btn)=>{
        let btnClass = 'char-btn';

        if(btn === lastKey){
            btnClass += isCorrectKey ? ' correct-key' : ' incorrect-key';
        }
        if(btn === 'space'){
            btnClass += ' space';
        }

        return btnClass;
    }

    useEffect(() => {
        
    }, [lastKey, isCorrectKey]);

    return(
        <div className='keyboard'>
            {
                keyChars.map((row, index) => {
                    if(row === 'space'){
                        return (
                            <button className='char-btn space' key={'space-row'+index}>
                                Space
                            </button>
                        )
                    }

                    return(
                        <div className='keyboard-row' key={'row'+index}>
                            {
                                row.map((char, idx)=>{
                                    return(
                                        <button className={getButtonClass(char)} key={char+idx}>
                                            {char}
                                        </button>
                                    )
                                })
                            }

                        </div>
                    )
                })
            }

        </div>
    )
}

export default KeyBoard;