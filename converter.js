var fs = require('fs');

var bitmap = fs.readFileSync('bitmap1.bmp');
// var bitmapType = bitmap.toString('utf-8', 0, 2);
// var size = bitmap.readUInt32LE(2);
// var pixel_data_start = bitmap.readUInt32LE(10);
// var bit_depth = bitmap.readUInt16LE(28);
// var number_of_colors = bitmap.readUInt32LE(46);
// var bit_height = bitmap.readUInt16LE(22);
// var bit_width = bitmap.readUInt16LE(18);
// var header_size = bitmap.readUInt16LE(14);
var palette_size = bitmap.slice(54, 1078);

//create new palette by taking original palette and applying math.random
var new_palette = [];

function createPalette(palette) {
  for (var i = 54; i <= 1024; i += 1) {
    var ranColor = Math.floor(Math.random() * (255));
    palette.push(bitmap[ranColor]);
  }
};

createPalette(new_palette);
console.log("new palette: " + new_palette);

//convert values back to hex

var convert_palette = new Buffer(new_palette);
convert_palette.writeUInt16LE(new_palette);

console.log("convert_palette: " + convert_palette);

//write to new file
fs.writeFileSync('bitmap2.bmp', convert_palette);
