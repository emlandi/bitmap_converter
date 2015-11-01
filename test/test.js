<<<<<<< HEAD
var expect = require('chai').expect;
var converter = require(__dirname + '/../lib/converter');
var bitmap1 = require(__dirname + '/../lib/bitmap1');

describe('the create palette function', function() {
  it('should change the colors', function() {
    console.log('test');
  })
})
=======
var expect = require('mocha').expect;
var converter = require(__dirname + '/../lib/converter');

describe('the converter', function() {
  it('should visually show you your mood', function() {
    expect(createPalette(new_palette)).to.not.eql(bitmap); //still working on something viable for this
  });
});
>>>>>>> 3c1455fa18789fd396dd2f768120ca29ba389941
