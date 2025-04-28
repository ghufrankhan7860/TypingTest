import { useContext } from "react";
import TextContext from "../contexts/TextContext";
import { getText } from "../utils/helper";

const Navbar = () => {
    const { setText, isPunctuation, isNumbers, setCompleteText, setWordsLen } =
        useContext(TextContext);
    return (
        <div className="flex justify-start w-full text-4xl py-5 text-custom-red-600 font-[montserrat] font-medium lowercase rounded-xl">
            <button
                className="cursor-pointer"
                onClick={() => {
                    const tempText = getText(isPunctuation, isNumbers);
                    setText(tempText);
                    setCompleteText(tempText);
                    setWordsLen(tempText.length);
                }}
            >
                Typing Tester
            </button>
        </div>
    );
};

export default Navbar;
