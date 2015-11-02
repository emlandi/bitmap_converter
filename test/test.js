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

//this fails, RefError convert_palette is not defined
describe('the colors', function() {
  before(function() {
    convert = converter();
  });
  it('should change', function(){
    expect(convert.palette_size).to.not.eql(convert_palette);
  });
});
