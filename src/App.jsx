import React from "react";

import DisplayText from "./components/DisplayText";
import KeyBoard from "./components/Keyboard";
import Score from "./components/Score";
import Timer from "./components/Timer";
import Navbar from "./components/Navbar";

import TextContextProvider from "./contexts/TextContextProvider";
import LastKeyContextProvider from "./contexts/LastKeyContextProvider";
import TimerContextProvider from "./contexts/TimerContext";
import ScoreContextProvider from "./contexts/ScoreContext";

// [#323437]

const App = () => {
    return (
        <div className="flex flex-col flex-wrap items-center h-screen bg-custom-red-100 px-4 sm:px-8 md:px-12 lg:px-20">
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
