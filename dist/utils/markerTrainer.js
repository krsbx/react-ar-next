var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const innerImageURL = '';
const isHexColor = (color) => /^#[0-9A-F]{6}$/i.test(color);
const buildMarker = (referencer) => (innerImageURL, ratio, size, color, onComplete) => {
    const outerMargin = 0.1;
    const borderMargin = (1 - 2 * outerMargin) * ((1 - ratio) / 2);
    const imageMargin = outerMargin + borderMargin;
    const { mainContainer, imageContainer } = referencer;
    const canvas = mainContainer.current;
    const context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (context && canvas) {
        canvas.width = size;
        canvas.height = size;
        const borderSize = size * (1 - 2 * outerMargin);
        const innerSize = canvas.width * (1 - 2 * imageMargin);
        // Outer Margin
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        // Boder Margin
        context.fillStyle = color;
        context.fillRect(outerMargin * canvas.width, outerMargin * canvas.height, borderSize, borderSize);
        // Image Margin
        context.fillStyle = 'white';
        context.fillRect(imageMargin * canvas.width, imageMargin * canvas.height, innerSize, innerSize);
        // Show image in the middle
        const innerImage = imageContainer.current;
        if (innerImage) {
            context.drawImage(innerImage, imageMargin * canvas.width, imageMargin * canvas.height, innerSize, innerSize);
            innerImage.src = innerImageURL;
            const imageURL = canvas.toDataURL();
            onComplete(imageURL);
        }
    }
};
const updateFullMarkerImage = (referencer) => (ratio, size, color, marker, onComplete) => {
    const style = new Option().style;
    style.color = color;
    if (color === '' || (style.color != color && !isHexColor(color))) {
        style.color = 'black';
    }
    buildMarker(referencer)(innerImageURL || marker, ratio / 100, size, style.color, onComplete);
};
const loadImage = (dataURI) => __awaiter(void 0, void 0, void 0, function* () {
    const image = new Image();
    const promise = new Promise((resolve, reject) => {
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.addEventListener('error', () => {
            reject('Error loading image');
        });
    });
    image.src = dataURI;
    return promise;
});
/**
 * call this on before downloading the pattern file
 * @param markerURI base64 encoded image
 */
const generatePattern = (markerURI) => __awaiter(void 0, void 0, void 0, function* () {
    const image = yield loadImage(markerURI);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 16;
    canvas.height = 16;
    let patternString = '';
    for (let orientation = 0; orientation > -2 * Math.PI; orientation -= Math.PI / 2) {
        context === null || context === void 0 ? void 0 : context.save();
        context === null || context === void 0 ? void 0 : context.clearRect(0, 0, canvas.width, canvas.height);
        context === null || context === void 0 ? void 0 : context.translate(canvas.width / 2, canvas.height / 2);
        context === null || context === void 0 ? void 0 : context.rotate(orientation);
        context === null || context === void 0 ? void 0 : context.drawImage(image, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        context === null || context === void 0 ? void 0 : context.restore();
        if (context) {
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            if (orientation !== 0)
                patternString += '\n';
            for (let channelOffset = 2; channelOffset >= 0; channelOffset--) {
                for (let y = 0; y < imageData.height; y++) {
                    for (let x = 0; x < imageData.width; x++) {
                        if (x !== 0)
                            patternString += ' ';
                        const offset = y * imageData.width * 4 + x * 4 + channelOffset;
                        const value = imageData.data[offset];
                        patternString += String(value).padStart(3);
                    }
                    patternString += '\n';
                }
            }
        }
    }
    return patternString;
});
/**
 * call this on downloading the marker file
 * @param markerURI base64 encoded image
 */
const generateImageFile = (markerURI, fileName = 'pattern-marker.png') => {
    const tempElement = document.createElement('a');
    tempElement.href = markerURI;
    tempElement.download = fileName;
    document.body.appendChild(tempElement);
    tempElement.click();
    document.body.removeChild(tempElement);
};
/**
 * @param patternFileString generated pattern string
 */
const triggerDownload = (patternFileString, fileName = 'pattern-marker.patt') => {
    const tempElement = document.createElement('a');
    tempElement.href = URL.createObjectURL(new Blob([patternFileString], { type: 'text/plain' }));
    tempElement.download = fileName;
    document.body.appendChild(tempElement);
    tempElement.click();
    document.body.removeChild(tempElement);
};
const MarkerTrainer = (referencer) => ({
    isHexColor,
    loadImage,
    generatePattern,
    triggerDownload,
    generateImageFile,
    buildMarker: buildMarker(referencer),
    updateFullMarkerImage: updateFullMarkerImage(referencer),
});
export default MarkerTrainer;
