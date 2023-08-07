import React from "react";
import "./App.css"
import Header from "./pages/header/Header";
import Introduction from "./pages/Introduction/Introduction";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app">
                <Introduction/>
            </div>

        </div>
    );
}

export default App;
