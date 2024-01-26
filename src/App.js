import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from "./common/Home";
import CreatePalette from "./palette/CreatePalette";
import AddPencilSet from "./pencils/AddPencilSet";
import './App.css';

const App = () => {
    useNavigate();
    const customStyle = {
        '--items': 3,
    };

    return (
        <div>
            <header id="header">
                <nav className="links" style={customStyle}>
                    <a href="/">Home</a>
                    <a href="/CreatePalette">Palette</a>
                    <a href="/AddPencilSet">Pencils</a>
                    <span className="line"></span>
                </nav>
            </header>

            <Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/AddPencilSet" element={<AddPencilSet/>}/>
                <Route path="/CreatePalette" element={<CreatePalette/>}/>
            </Routes>
        </div>
    );
};

export default App;
