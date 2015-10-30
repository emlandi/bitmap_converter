var fs = require('fs');
var os = require('os');
var EE = require('events').EventEmitter;

var bitmap = fs.readFileSync('bitmap1.bmp');
var bitmapType = bitmap.toString('utf-8', 0, 2);
var size = bitmap.readUInt32LE(2);
var pixel_data_start = bitmap.readUInt32LE(10);
var bit_depth = bitmap.readUInt16LE(28);
var number_of_colors = bitmap.readUInt32LE(46);
var bit_height = bitmap.readUInt16LE(22);
var bit_width = bitmap.readUInt16LE(18);
var header_size = bitmap.readUInt16LE(14) + 14;
var palette_size = bitmap.readUInt32LE(10) - (bitmap.readUInt16LE(14) + 14);

console.log(bitmap);

//create new palette by taking original palette and applying math.random
var new_palette = [];

function Palette(palette) {
  for (var i = 54; i <= palette_size; i += 4) {
    var ranColor = Math.floor(Math.random() * (255));
    palette.push(bitmap[ranColor]);
  }
};

Palette(new_palette);
console.log("new_palette: " + new_palette);

//convert values back to hex
var convert_palette = new Buffer(new_palette);
convert_palette.writeUInt16LE(new_palette);
console.log("buf: " + convert_palette);

//need to insert convert_palette into bitmap before writing to new file.

// function convertedPalette(new_palette) {
//   for (var i=54; i <= palette_size; i += 4) {
//     var buf = new Buffer(12000);
//     buf.writeUInt16LE(new_palette, i);
//     console.log("buf: " + buf);
    // new_palette[i].toString(16);
    // convert_palette.push(new_palette);
    // console.log("here " + convert_palette);
//   }
// }

// convertedPalette(convert_palette);
// console.log("converted palette: " + convert_palette);

//write to new file
fs.writeFile('bitmap2.bmp', convert_palette, function (err) {
  if (err) return console.log(err);
});
