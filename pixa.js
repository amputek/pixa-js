var PIXA = (function(){

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var pix = {};

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function getLum(data){
        return 0.2126*data[0] + 0.7152*data[1] + 0.0722*data[2];
    }

    pix.getColor = function( src, x, y, callback ){
        var pixImg = new Image();
        pixImg.crossOrigin = "anonymous";
        pixImg.src = src;
        pixImg.onload = function(){
            context.drawImage(pixImg, 0, 0);
            var data = context.getImageData(x, y, 1, 1).data;
            var result = {
                src : src,
                p_x : x,
                p_y : y,
                hex : rgbToHex(data[0],data[1],data[2]),
                rgba : {
                    r: data[0],
                    g: data[1],
                    b: data[2],
                    a: data[3]
                },
                lum : getLum(data),
                toString: function(){

                    return "Pixel Analysis of '" + this.src + "' - pixel [" + this.p_x + ", " + this.p_y + "]" + "\n" +
                    "- Pixel Color (Hex): " + this.hex + "\n" +
                    "- Pixel Color (RGBA): " + this.rgba.r + ", " + this.rgba.g + ", " + this.rgba.b + ", " + this.rgba.a + "\n" +
                    "- Pixel Luminosity: " + this.lum + " / " + 255

                }
            }

            callback( result );
        }
    }

    return pix;
    
}());
