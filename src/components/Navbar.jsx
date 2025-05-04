import { useContext } from "react";
import TextContext from "../contexts/TextContext";
import { getText } from "../utils/helper";

const Navbar = () => {
    const {
        setText,
        isPunctuation,
        isNumbers,
        setCompleteText,
        setWordsLen,
        setIsCustomText,
    } = useContext(TextContext);
    return (
        <div className="flex justify-start w-full text-2xl md:text-4xl py-3 sm:py-4 md:py-5 text-custom-red-600 font-[montserrat] font-medium lowercase rounded-xl [@media(max-width:700px)]:text-xl">
            <button
                className="cursor-pointer"
                onClick={() => {
                    const tempText = getText(isPunctuation, isNumbers);
                    setText(tempText);
                    setCompleteText(tempText);
                    setWordsLen(tempText.length);
                    setIsCustomText(false);
                }}
            >
                Typing Tester
            </button>
        </div>
    );
};

export default Navbar;
