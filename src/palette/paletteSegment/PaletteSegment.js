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
            <h2>Pick base color</h2>
            <div ref={colorPickerRef}></div>
        </div>
    );
};

export default PaletteSegment;

