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
        <Example />
      </ARProvider>
    </React.StrictMode>,
    document.getElementById('root'));
   ```

6. Run your react apps and have fun

If you want to know more about the component and it props, you can read it [here](api.md)
