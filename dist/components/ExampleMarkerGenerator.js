var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState } from 'react';
import MarkerTrainer from '../utils/markerTrainer';
const ExampleMarkerGenerator = () => {
    const mainContainer = useRef(null);
    const imageContainer = useRef(null);
    const [ratio, setRatio] = useState(83);
    const [size, setSize] = useState(303);
    const [color, setColor] = useState('');
    const [marker, setMarker] = useState();
    const referencer = { imageContainer, mainContainer };
    const [markerURL, setMarkerURL] = useState('');
    const fileReader = new FileReader();
    const imageRef = useRef('');
    const { updateFullMarkerImage, generatePattern } = MarkerTrainer(referencer);
    fileReader.onload = (e) => {
        var _a;
        imageRef.current = `${(_a = e.target) === null || _a === void 0 ? void 0 : _a.result}`;
        // Auto Update MarkerURL after image loaded
        updateMarker();
    };
    // Read marker image and generate base64
    if (marker)
        fileReader.readAsDataURL(marker);
    const updateMarker = () => updateFullMarkerImage(ratio, size, color, imageRef.current, setMarkerURL);
    // Auto Update MarkerURL
    useEffect(() => {
        updateMarker();
    }, [ratio, size, color]);
    return (_jsxs("div", { children: [_jsx("input", { type: "range", min: 10, max: 90, value: ratio, onChange: (e) => setRatio(parseInt(e.target.value, 10)) }, void 0), _jsx("input", { type: "number", min: 0, value: size, onChange: (e) => setSize(parseInt(e.target.value, 10)), placeholder: 'Marker resolutions' }, void 0), _jsx("input", { value: color, onChange: (e) => setColor(e.target.value), placeholder: 'Border Color' }, void 0), _jsx("input", { type: "file", max: 1, accept: "image/jpg, image/jpeg, image/png", onChange: (e) => {
                    const selected = e.target.files;
                    if (selected)
                        setMarker((current) => selected[0] || current);
                } }, void 0), _jsxs("div", { children: [_jsx("img", { src: markerURL, width: 350, height: 350 }, void 0), _jsx("button", Object.assign({ onClickCapture: () => __awaiter(void 0, void 0, void 0, function* () {
                            console.log(yield generatePattern(imageRef.current));
                        }) }, { children: "Generate Marker" }), void 0)] }, void 0), _jsx("canvas", Object.assign({ ref: mainContainer, style: { display: 'none' } }, { children: _jsx("img", { ref: imageContainer }, void 0) }), void 0)] }, void 0));
};
export default ExampleMarkerGenerator;
