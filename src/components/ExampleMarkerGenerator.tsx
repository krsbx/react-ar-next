import { useRef, useEffect, useState } from 'react';
import MarkerTrainer from '../utils/markerTrainer';

const ExampleMarkerGenerator = () => {
  const mainContainer = useRef<HTMLCanvasElement>(null);
  const imageContainer = useRef<HTMLImageElement>(null);
  const [ratio, setRatio] = useState(83);
  const [size, setSize] = useState(303);
  const [color, setColor] = useState('');
  const [marker, setMarker] = useState<Blob>();
  const referencer = { imageContainer, mainContainer };
  const [markerURL, setMarkerURL] = useState('');
  const fileReader = new FileReader();
  const imageRef = useRef('');
  const { updateFullMarkerImage, generatePattern } = MarkerTrainer(referencer);

  fileReader.onload = (e) => {
    imageRef.current = `${e.target?.result}`;
    // Auto Update MarkerURL after image loaded
    updateMarker();
  };

  // Read marker image and generate base64
  if (marker) fileReader.readAsDataURL(marker);

  const updateMarker = () =>
    updateFullMarkerImage(ratio, size, color, imageRef.current, setMarkerURL);

  // Auto Update MarkerURL
  useEffect(() => {
    updateMarker();
  }, [ratio, size, color]);

  return (
    <div>
      <input
        type="range"
        min={10}
        max={90}
        value={ratio}
        onChange={(e) => setRatio(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        min={0}
        value={size}
        onChange={(e) => setSize(parseInt(e.target.value, 10))}
        placeholder={'Marker resolutions'}
      />
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder={'Border Color'}
      />
      <input
        type="file"
        max={1}
        accept="image/jpg, image/jpeg, image/png"
        onChange={(e) => {
          const selected = e.target.files;

          if (selected) setMarker((current) => selected[0] || current);
        }}
      />
      <div>
        <img src={markerURL} width={350} height={350} />
        <button
          onClickCapture={async () => {
            console.log(await generatePattern(imageRef.current));
          }}
        >
          Generate Marker
        </button>
      </div>
      <canvas ref={mainContainer} style={{ display: 'none' }}>
        <img ref={imageContainer} />
      </canvas>
    </div>
  );
};

export default ExampleMarkerGenerator;
