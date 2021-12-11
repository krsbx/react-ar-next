## Utils Refrence

## `useARCamera` hooks

Returns: Current active AR Camera in current scene (ARProvider)

## `useARDistance` hooks

Returns: Current distance between current active AR Camera with current active AR Marker in current scene (ARProvider)

## `useARMarker` hooks

Returns: Current active AR Marker in current scene (ARProvider)

## `MarkerTrainer` utils

| Property     |                                                   Type                                                   |
| ------------ | :------------------------------------------------------------------------------------------------------: |
| `referencer` | `{mainContainer: React.RefObject<HTMLCanvasElement>, imageContainer: React.RefObject<HTMLImageElement>}` |

Returns : `isHexColor`,
`loadImage`,
`generatePattern`,
`triggerDownload`,
`generateImageFile`,
`buildMarker`,
`updateFullMarkerImage`,

## `isHexColor`

Check if given string is a valid hex color or not

| Property |   Type   | Supported values |
| -------- | :------: | ---------------: |
| `color`  | `string` |                - |

Returns : `boolean`

## `loadImage`

Will generate image element that load given base64 string

| Property  |   Type   | Supported values |
| --------- | :------: | ---------------: |
| `dataURI` | `string` |                - |

Returns: `Promise<HTMLImageElement>`

## `generatePattern`

Will generate pattern string from given base64 string

| Property  |   Type   | Supported values |
| --------- | :------: | ---------------: |
| `dataURI` | `string` |                - |

Returns: `Promise<string>`

## `triggerDownload`

Will generate a download link for generated pattern string

| Property            |   Type   | Supported values |
| :------------------ | :------: | ---------------: |
| `patternFileString` | `string` |                - |
| `fileName`          | `string` |                - |

Returns: `void`

## `generateImageFile`

Will generate a download link for generated marker image

| Property    |   Type   | Supported values |
| :---------- | :------: | ---------------: |
| `markerURI` | `string` |                - |
| `fileName`  | `string` |                - |

Returns: `void`

## `buildMarker`

Will generate a pattern string from given values

| Property        |              Type              | Supported values |
| :-------------- | :----------------------------: | ---------------: |
| `innerImageURL` |            `string`            |   `base64 image` |
| `ratio`         |            `number`            |                - |
| `size`          |            `number`            |                - |
| `color`         |            `number`            |                - |
| `onComplete`    | `callback(markerURI : string)` |                - |

Returns: `void`

## `updateFullMarkerImage`

Will generate a pattern string from given values

| Property     |              Type              | Supported values |
| :----------- | :----------------------------: | ---------------: |
| `ratio`      |            `number`            |                - |
| `size`       |            `number`            |                - |
| `color`      |            `number`            |                - |
| `marker`     |            `string`            |   `base64 image` |
| `onComplete` | `callback(markerURI : string)` |                - |

Returns: `void`
