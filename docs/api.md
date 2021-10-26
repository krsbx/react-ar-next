## API Refrence

## `AFrameRenderer` component properties

### arToolKit
|  Property  |  Type  |  Supported values  |
| -------- | :----: | ----------------: |
|`detectionMode` | `string` | `['color', 'color_and_matrix', 'mono', 'mono_and_matrix']` |
|`matrixCodeType` | `string` | `['3x3', '3x3_HAMMING63', '3x3_PARITY65', '4x4', '4x4_BCH_13_9_3', '4x4_BCH_13_5_5']`
| `cameraParametersUrl` | `string` | `window.THREEx.ArToolkitContext.baseURL + '<parametersLocations>'` |
| `maxDetectionRate` | `number` |  |
| `sourceType` | `string` | `['webcam', 'image', 'video']` |
| `sourceUrl` | `string` | - |
| `sourceHeight` | `number`| - |
| `sourceWidth` | `number`| - |
| `displayHeight` | `number`| - |
| `displayWidth` | `number`| - |
| `canvasHeight` | `number`| - |
| `canvasWidth` | `number`| - |
| `trackingMethod` | `string` | `['tango', 'artoolkit', 'best']` |
| `debugUIEnabled` | `boolean` | `['true', 'false']` |

### getSceneRef
`getSceneRef`accepts a function with a single argument and returns a reference to `<a-scene>` primitive [SceneRenderer Component](#SceneRenderer)

Example
```js
const App = () => {
  const scene = useRef();

  return (
    <AFrameRenderer getSceneRef={(sceneRef) => scene.current = sceneRef}>
      ...
    </AFrameRenderer>
  )
}
```

### inherent
**`type`** - `boolean`

When `true` it will use a static camera for the AR.


## `Marker` component properties

### Parameters

|  Property  |  Type  |  Supported values  |
| -------- | :----: | ----------------: |
| `type` | `string` | `['pattern', 'barcode', 'unknown' ]` |
| `size` | `number` | - |
| `patternURL` | `string` | - |
| `url` | `string` | - |
| `barcodeValue` | `number` | - |
| `changeMatrixMode` | `string` | - |
| `minConfidence` | `number` | - |
| `preset` | `string` | `['hiro', 'kanji', 'custom']` |
| `hit-testing-enabled` | `boolean` | `['true', 'false']` |
| `hit-testing-renderDebug` | `boolean` | `['true', 'false']` |


## `Box` component properties

|  Property  |  Type  |  Supported values  |
| -------- | :----: | ----------------: |
| `color` | `string` | - |
| `material` | `string` | - |
| `position` | `string` | - |
| `scale` | `string` | - |
| `animation` | `string` | - |

## `Entity` component properties

|  Property  |  Type  |  Supported values  |
| -------- | :----: | ----------------: |
| `color` | `string` | - |
| `material` | `string` | - |
| `position` | `string` | - |
| `scale` | `string` | - |
| `animation` | `string` | - |
| `gltf-model` | `string` | - |
| `geometry` | `string`| - |


### animation

Both Entity and Box component support using an animation

|  Property  |  Type  |  Supported values  |
| -------- | :----: | ----------------: |
| `property` | `string` | - |
| `to` | `string` | - |
| `delay` | `number (ms)` | - |
| `dir` | `string` | `['normal', 'alternate', 'reverse']` | 
| `dur` | `number (ms)` | - |
| `easing` | `string` | `['easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc',  'easeOutCirc', 'easeInOutCirc', 'easeInBack', 'easeOutBack',  'easeInOutBack', 'easeInElastic,', 'easeOutElastic', 'easeInOutElastic']` |
| `elasticity` | `number` | - |
| `loop` | `boolean` | `['true', 'false]` |
| `round` | `boolean` | `['true', 'false]` |
| `autoplay` | `boolean` | `['true', 'false]` |
| `enabled` | `boolean` | `['true', 'false]` |


## SceneRenderer component

Do not touch this component, just pass the props that it need through the AFrameRenderer
