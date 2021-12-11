## Usage and Implementations

1. Add ARProvider in the top level of your React Apps, you could add it in index.js, inde.jsx or App.js, App.jsx as long as the other component is being used after that files.
2. Add AFrameRenderer on the top level before the other component

  Example in App.jsx:
  ```js
    <div>
      <AFrameRenderer>
      {....}
      </AFrameRenderer>
    </div>
  ```
3. Add Marker component followed by Entity or Box component
   
  Example in App.jsx:
  ```js
    ...
    <Marker parameters={...}>
      <Entity .../>
    </Marker>
    ...
  ```
4. Add some Animation if you want a simple animations
   
  Example in App.jsx:
  ```js
    ...
    <Marker parameters={...}>
      <Entity animation={{
        property: 'rotation',
        to: '0 360 0',
        dur: '5000',
        loop: true,
        }}
      />
    </Marker>
    ...
  ```
5. Now you will have this in your App.jsx
   
  ```js
   <AFrameRenderer
     arToolKit={{}}
     stats
     getSceneRef={(ref) => (scene.current = ref)}
   >
     <Marker parameters={{ preset: 'hiro' }}>
       <Entity
         material="color: red"
         gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
         scale="0.02 0.02 0.02"
         position="0 0 -1"
         animation={{
           property: 'rotation',
           to: '0 360 0',
           dur: '5000',
           loop: true,
         }}
       ></Entity>
     </Marker>
   </AFrameRenderer>
  ```

  and this in your index.jsx

  ```js
   ReactDOM.render(
    <React.StrictMode>
      <ARProvider>
        <App />
      </ARProvider>
    </React.StrictMode>,
    document.getElementById('root'));
  ```

6. Run your react apps and have fun

## Marker Trainer
1. Add ARProvider in the top level of your React Apps, you could add it in index.js, inde.jsx or App.js, App.jsx as long as the other component is being used after that files.
2. Add this snippets to your codes
   
   ```js
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
   ```

  Thats all the importants variables for generating your custom marker

3. Add this snippets after the last snippets to your code
   
   ```js
    fileReader.onload = (e) => {
      imageRef.current = `${e.target?.result}`;
      // Auto Update MarkerURL after image loaded
      updateMarker();
    };

    // Read marker image and generate base64
    if (marker) fileReader.readAsDataURL(marker);

    // Call this functions after ratio, size, color, and imageRef value changes
    const updateMarker = () =>
    updateFullMarkerImage(ratio, size, color, imageRef.current, setMarkerURL);
   ```

4. Add corresponding input field for updating the ratio, size, color, and imageRef value

5. Make sure you have this in your JSX elements
   
  This one is for rendering the uploaded image, you can change the width and height as you like

  ``` js
    <img src={markerURL} width={350} height={350} />
  ```

  This one is for generating the image to base64
  
  ``` js
    <canvas ref={mainContainer} style={{ display: 'none' }}>
      <img ref={imageContainer} />
    </canvas>
  ```

6. If you want to generate the pattern, you can add
   
  ```js
    triggerDownload(await generatePattern(imageRef.current), yourFileNameHere);
  ```
  
  Please change the `yourFileNameHere` to the name of downloaded file name that you want
7. If you want to generate the renderer marker to an image, you can add
  
  ```js
   generateImageFile(await generatePattern(imageRef.current), yourFileNameHere)
  ```
  
  Please change the `yourFileNameHere` to the name of downloaded file name that you want

If you want to know more about the component and it props, you can read it [here](api.md)
