import React, {useEffect, useRef} from 'react';
import './CreatePalette.css';
import "../App.css"
import PaletteSegment from "./paletteSegment/PaletteSegment";
import Pickr from "@simonwep/pickr";
import '@simonwep/pickr/dist/themes/classic.min.css';

const CreatePalette = () => {
    const colorPickerRef = useRef();

    useEffect(() => {
        const pickr = Pickr.create({
            el: colorPickerRef.current,
            theme: 'classic',
            useAsButton: false,
            position: 'bottom-middle',
            showAlways: true,
            components: {
                preview: true,
                opacity: false,
                hue: true,
                interaction: {
                    input: true,
                    clear: false,
                    save: true,
                },
            },
        });

        return () => {
            pickr.destroy();
        };
    }, [colorPickerRef]);

    return (
        <div className="rootComponent">
            <div>
                <h2>CreatePalette</h2>
                <p>Welcome to the home page!</p>
            </div>
            <div className="paletteSegment">
                <table>
                    <tbody>
                    <tr>
                        <td><h2>Pick base color</h2></td>
                    </tr>
                    <tr>
                        <td className="colorPickerCell" rowSpan={3}>
                            <div className="colorPicker" ref={colorPickerRef}></div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <PaletteSegment/>
        </div>
    );
};


export default CreatePalette;

