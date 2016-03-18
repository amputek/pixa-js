# PIXA: Pixel Analysis Library

PIXA is a tiny JS library for analyzing pixel data in an image. It can work out the rgba, hex, and luminosity values of a target pixel.

PIXA works with Cross-Origin images, if the target image is cross-origin enabled.


#### To Use
```
PIXA.getColor( imgSrc, x, y, callback )
```

The callback takes a single parameter which will be an object which contains the pixel data.


#### Example
To analyse the pixel at [135, 45] in "img.jpg":
```
PIXA.getColor( "img.jpg", 135, 45, function( pixelData ){

    var hexData = pixelData.hex; //eg. #9abdd3
    var rgbaData = pixelData.rgba; //eg. {r: 154, g: 189, b: 211, a: 255}
    var lumVal = pixelData.lum; //eg. 183

    var dataAsString = pixelData.toString(); //prints values to console
    console.log(dataAsString);

    //example use of data
    document.getElementById("box").style.color = pixelData.hex;

});

```
