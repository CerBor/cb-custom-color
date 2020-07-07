var hexToRgba = require("hex-to-rgba");
var rgb2hex = require ("rgb2hex");

class cbColor {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color.toString();
    }
    hexToRGBA() {
        return hexToRgba(this.color);
    }
    rgbToHex() {
        return rgb2hex(this.color);
    }
}
module.exports = cbColor;