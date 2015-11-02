var converter = function() {

var fs = require('fs');
var bitmap = fs.readFileSync(__dirname + '/bitmap1.bmp');

var bitmapObj = {
  bitmapType: bitmap.toString('utf-8', 0, 2),
  size: bitmap.readUInt32LE(2),
  pixel_data_start: bitmap.readUInt32LE(10),
  bit_depth: bitmap.readUInt16LE(28),
  number_of_colors: bitmap.readUInt32LE(46),
  bit_height: bitmap.readUInt16LE(22),
  bit_width: bitmap.readUInt16LE(18),
  header_size: bitmap.readUInt16LE(14),
  palette_size: bitmap.slice(54, 1078),
};

// create new palette by taking original palette and applying math.random
var new_palette = [];

function createPalette(palette) {
  for (var i = 54; i <= 1024; i++) {
    var ranColor = Math.floor(Math.random() * (255));
    palette.push(bitmap[ranColor]);
  }
}

createPalette(new_palette);

//convert values back to hex. convert_palette now holds the values of the new palette in hex.
var convert_palette = new Buffer(new_palette);
convert_palette.writeUInt16LE(new_palette);

//apply convert_palette to bitmap.
Array.prototype.forEach.call(convert_palette, function(byte, index){
  bitmapObj.palette_size.writeUInt8(byte, index);
});

//write to new file
fs.writeFileSync('bitmap2.bmp', bitmap);
return bitmapObj;

};

module.exports = converter;
