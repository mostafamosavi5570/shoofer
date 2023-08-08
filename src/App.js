import React from "react";
import "./App.css"
import Header from "./pages/header/Header";
import Introduction from "./pages/Introduction/Introduction";
import Attributes from "./pages/attributes/Attributes";
import About from "./pages/aboutUs/About";
import Footer from "./pages/footer/Footer";

function App() {
    return (
        <div className="">
            <Header/>
                <div className="mainApp">
                    <div className="app">
                        <Introduction/>
                        <Attributes/>
                        <About/>
                    </div>
                </div>
            <Footer/>

        </div>
    );
}

export default App;
