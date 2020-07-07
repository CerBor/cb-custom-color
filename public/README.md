# cb-custom-color
Small library to help you with colors

## Installation
```javascript
var cbColor = require ("cb-custom-color");
```
## Usage
```javascript
var cbColor = require ("cb-custom-color");
var color = new cbColor.namedColor('red');
console.log(color.getHexColorFromName());
// #ff0000
```

## Classes:
### ``` hexColor ```
```javascript
var color = new cbColor.hexColor('#ffffff');
```
### Functions: 
```javascript
// Get color
color.getColor();
...
// Convert your color to rgb format
color.toRGB();
```
### ``` RGBColor ```
```javascript
var color = new cbColor.RGBColor(255, 255, 255);
```
### Functions: 
```javascript
// Get color
color.getColor();
...
// Convert your color to hex format
color.toHex();
```
### ``` namedColor ```
```javascript
var color = new cbColor.namedColor('red');
```
### Functions
```javascript
// Get color
color.getColor();
...
// Convert your named color to rgb format
color.getRGBColorFromName();
...
// Convert your named color to hex format
color.getHexColorFromName();
```
