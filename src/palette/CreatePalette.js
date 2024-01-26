import React from 'react';
import './CreatePalette.css';
import "../App.css"
import PaletteSegment from "./paletteSegment/PaletteSegment";

const CreatePalette = () => {
    return (
        <div className="rootComponent">
            <div>
                <h2>CreatePalette</h2>
                <p>Welcome to the home page!</p>
                <PaletteSegment/>
            </div>
        </div>
    );
};

export default CreatePalette;

