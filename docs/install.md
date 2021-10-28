## Installation

* Install `react-ar-next`

```
npm i react-ar-next
```

* Adding AR Js
  
1. Download the newest version of AR Js [here](https://github.com/AR-js-org/AR.js/blob/master/aframe/build/aframe-ar.js)
2. Make sure the downloaded file are named as `aframe-ar.js`
3. Put `aframe-ar.js` into your public folder
4. So the structures of your public folder might look like this\
![Public folder structures](structures.jpg)

* After Installation

Please change this line in index.html
```js
<meta name="viewport" content="width=device-width, initial-scale=1" />
```
to this line
```js
<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
```
It will fix the zooming problem on smaller devices

* Usage

You can find about the installation in [here](usage.md)

#### We're sorry for the inconvenient installation process from 1.0.0-beta2 to ^1.0.0-beta3
