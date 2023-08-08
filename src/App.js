import React from "react";
import "./App.css"
import Header from "./pages/header/Header";
import Introduction from "./pages/Introduction/Introduction";
import Attributes from "./pages/attributes/Attributes";
import About from "./pages/aboutUs/About";
import Footer from "./pages/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
                <div style={{backgroundColor:' #DAF2FC',paddingBottom: '1rem',
                    borderBottomLeftRadius:' 26%'}}>
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
