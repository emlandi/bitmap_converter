var fs = require('fs');
var os = require('os');
var EE = require('events').EventEmitter;

var bitmap = fs.readFileSync('bitmap1.js');
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

var new_palette = [];

function Palette(palette) {
  for (var i = 54; i <= palette_size; i += 4) {
    var ranColor = Math.floor(Math.random() * (255));
    palette.push(bitmap[ranColor]);
  }
};

Palette(new_palette);
console.log(new_palette);


