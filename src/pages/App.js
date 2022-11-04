import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {MainHeader} from "../components/templates/Header";
import {DuoMainBody, SoloMainBody} from "../components/templates/SoloBody";
import {MainFooter} from "../components/templates/Footer";

const mainPage = {
    header: {},
    body: {
        paddingTop: "276px",
    },
    footer: {
        paddingTop: "101px",
    }
}

function App() {
    return (
        <div>
            <MainHeader/>
            <Routes>
                <Route path="/" element={<Navigate to="/duo"/>}/>
                <Route path="/solo" element={<SoloMainBody newCss={mainPage.body}/>}/>
                <Route path="/duo" element={<DuoMainBody newCss={mainPage.body}/>}/>
            </Routes>
            <MainFooter newCss={mainPage.footer}></MainFooter>
        </div>

    );
}

export default App;
