
export const wordChecker = (btn, lastKey, setLastKey, text, setText, isRunning, score, setScore) => {
    setLastKey(btn);
    if(isRunning){
        if(btn === text[0]){
            setLastKey(text[0]);
            setText(text.slice(1));
            setScore(score + 1);
            return true;
        }
        else{
            return false;
        }
    }
}