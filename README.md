# cb-custom-color
Small library to help you with colors

## Installation
```javascript
var cbColor = require ("cb-color");
```
## Usage
```javascript
var cbColor = require ("cb-color");
var color = new cbColor('#ffffff');
console.log(color.getColor());
// #ffffff
```

## Functions:
### ```hexToRGBA```
```javascript
console.log(color.hexToRGBA());
```
##### Convert your color to rgba
### ``` rgbToHex ```
```javascript
console.log(color.rgbToHex());
```
##### Convert your rgb colot to hex format
