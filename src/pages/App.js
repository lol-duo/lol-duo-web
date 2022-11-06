import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {MainHeader} from "../components/templates/Header";
import {SoloMainBody} from "../components/templates/SoloBody";
import {MainFooter} from "../components/templates/Footer";
import {DuoMainBody} from "../components/templates/DuoBody";
import {css} from "@emotion/react";


function App() {
    return (
        <div css={css({
            position: "relative",
            display: "flex",
            flexDirection: "column",
        })}>
            <MainHeader/>
            <Routes>
                <Route path="/" element={<Navigate to="/duo"/>}/>
                <Route path="/solo" element={<SoloMainBody newCss={{
                    width: "100%",
                    minHeight: "100vh",
                    height: "auto",
                    overflow: "auto",
                }}/>}/>
                <Route path="/duo" element={<DuoMainBody newCss={{
                    width: "100%",
                    minHeight: "100vh",
                    height: "auto",
                    overflow: "auto",
                }}/>}/>
            </Routes>
            <MainFooter></MainFooter>
        </div>

    );
}

export default App;
