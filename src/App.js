import React from "react";
import "./App.css"
import Header from "./pages/header/Header";
import Introduction from "./pages/Introduction/Introduction";
import Attributes from "./pages/attributes/Attributes";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app">
                <Introduction/>
                <Attributes/>
            </div>

        </div>
    );
}

export default App;
