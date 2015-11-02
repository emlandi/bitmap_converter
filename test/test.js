var expect = require('mocha').expect;
var converter = require(__dirname + '/../lib/converter');


//this passes
describe('test', function() {
  it('should print test', function(){
    console.log('test');
  });
});

//this is pending
describe('pending', function(){
  it('should be pending');
});

//this fails RefError: bitmapType is undefined
describe('the bitmapType', function() {
  it('should equal BM', function(){
    expect(bitmapType).to.eql("BM");
  });
});

//this fails RefError: createPalette(new_palette) & convert_palette are not defined.
describe('the colors', function() {
  it('should change', function(){
    expect(createPalette(new_palette)).to.not.eql(convert_palette);
  });
});
