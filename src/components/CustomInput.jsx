import { useState, useContext } from "react";
import TextContext from "../contexts/TextContext";

const CustomInput = ({ setIsCustomVisible }) => {
    const [customText, setCustomText] = useState("");

    const {
        setText,
        setCompleteText,
        setIsPunctuation,
        setIsNumbers,
        isCustomText,
        setIsCustomText,
    } = useContext(TextContext);

    const handleXbtn = () => {
        setIsCustomVisible(false);
    };

    const handleOnChange = (e) => {
        setCustomText(e.target.value);
    };

    const handleApply = () => {
        setText(customText);
        setCompleteText(customText);
        setIsCustomVisible(false);
        setIsPunctuation(false);
        setIsNumbers(false);
        setIsCustomText(true);
        console.log(isCustomText);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10 " />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4xl bg-custom-red-150 h-3/4 z-50 rounded-lg shadow-lg [@media(max-width:400px)]:w-90 [@media(max-width:400px)]:h-3/5">
                <div className="flex flex-col h-full p-4 gap-1 ">
                    <button
                        className="ml-auto text-gray-700 hover:text-custom-red-800 px-3 py-1 text-lg bg-custom-red-300 text-white rounded-md m-1 text-center"
                        onClick={handleXbtn}
                    >
                        x
                    </button>
                    <textarea
                        className="w-full border-1 border-custom-red-300  mx-auto h-full p-3 rounded-md bg-custom-red-100 focus:outline-0 wrap-break-word [@media(max-width:400px)]:w-full"
                        type="text-box"
                        value={customText}
                        onChange={handleOnChange}
                    />
                    <button
                        className="ml-auto mt-auto bg-custom-red-300 hover:text-custom-red-800 text-white px-4 py-2 rounded-md"
                        onClick={handleApply}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </>
    );
};
export default CustomInput;
