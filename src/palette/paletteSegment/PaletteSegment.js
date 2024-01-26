import React, {useEffect, useRef} from 'react';
import '../CreatePalette.css';
import '@simonwep/pickr/dist/themes/monolith.min.css';
import Pickr from '@simonwep/pickr';


const PaletteSegment = () => {
    const colorPickerRef = useRef();

    useEffect(() => {
        const pickr = Pickr.create({
            el: colorPickerRef.current,
            theme: 'monolith',
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
        <div className="paletteSegment">
            <table>
                <tbody>
                <tr>
                    <td><h2>Pick base color</h2></td>
                    <td><h2>Palette</h2></td>
                </tr>
                <tr>
                    <td className="colorPickerCell" rowSpan={3}>
                        <div className="colorPicker" ref={colorPickerRef}></div>
                    </td>
                    <td><h2>Color</h2></td>
                </tr>
                <tr>
                    <td><h2>Color</h2></td>
                </tr>
                <tr>
                    <td><h2>Color</h2></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaletteSegment;

