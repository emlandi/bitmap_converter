var expect = require('chai').expect;
var converter = require(__dirname + '/../lib/converter');

var convert = {};

//this passes
describe('the bitmapType', function() {
  before(function() {
    convert = converter();
  });
  it('should equal BM', function(){
    expect(convert.bitmapType).to.eql("BM");
  });
});

//this fails RefError: createPalette(new_palette) & convert_palette are not defined.
describe('the colors', function() {
  before(function() {
    convert = converter();
    console.log(convert);
  });
  it('should change', function(){
    expect(convert.new_palette).to.not.eql(convert.convert_palette);
  });
});
