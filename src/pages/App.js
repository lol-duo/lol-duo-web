import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {SoloMainPage} from "../components/templates/Page";
import {MainHeader} from "../components/templates/Header";
import {SoloMainBody} from "../components/templates/Body";
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
                <Route path="/duo" element={<SoloMainBody newCss={mainPage.body}/>}/>
                <Route path="/text" element={<SoloMainPage/>}/>
            </Routes>
            <MainFooter newCss={mainPage.footer}></MainFooter>
        </div>

    );
}

export default App;
