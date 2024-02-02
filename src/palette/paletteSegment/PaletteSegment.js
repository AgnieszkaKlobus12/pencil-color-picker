import React from 'react';
import '../CreatePalette.css';

const PaletteSegment = () => {

    return (
        <div className="paletteSegment">
            <h2>Color Palette</h2>
            <table>
                <tbody>
                <tr>
                    <td>Color 1</td>
                    <td><input type={"color"}/></td>
                </tr>
                <tr>
                    <td>Color 2</td>
                    <td><input type={"color"}/></td>
                </tr>
                <tr>
                    <td>Color 3</td>
                    <td><input type={"color"}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaletteSegment;

