import React from "react";
import ReactDOM from "react-dom/client";

import DisplayText from "./components/DisplayText";
import KeyBoard from "./components/Keyboard";
import Score from "./components/Score";
import Timer from "./components/Timer";
import Navbar from "./components/Navbar";

import TextContextProvider from "./contexts/TextContextProvider";
import LastKeyContextProvider from "./contexts/LastKeyContextProvider";
import TimerContextProvider from "./contexts/TimerContext";
import ScoreContextProvider from "./contexts/scoreContext";

// [#323437]

const App = () => {
    return (
        <div className="flex flex-col flex-wrap items-center h-screen bg-custom-red-100 px-20 ">
            <TimerContextProvider>
                <TextContextProvider>
                    <ScoreContextProvider>
                        <LastKeyContextProvider>
                            <Navbar />
                            <Timer />
                            <Score />
                            <DisplayText />
                            <KeyBoard />
                        </LastKeyContextProvider>
                    </ScoreContextProvider>
                </TextContextProvider>
            </TimerContextProvider>
        </div>
    );
};

export default App;
