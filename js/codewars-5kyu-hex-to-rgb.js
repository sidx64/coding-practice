/*
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

    Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
    Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
Example

"#FF9933" --> {r: 255, g: 153, b: 51}


*/

function hexStringToRGB(hexString) {
    const rgbMap = new Map();
    let obj = {};
    rgbMap.set('r', parseInt('0x' + hexString[1] + hexString[2], 16));
    rgbMap.set('g', parseInt('0x' + hexString[3] + hexString[4], 16));
    rgbMap.set('b', parseInt('0x' + hexString[5] + hexString[6], 16));

    rgbMap.forEach((value, key) => {
        obj[key] = value;
    });

    console.log(obj);
    return obj;
}

hexStringToRGB('#FF9933'); // { r: 255, g: 153, b: 51 };
