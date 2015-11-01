var expect = require('mocha').expect;
var converter = require(__dirname + '/../lib/converter');

describe('the converter', function() {
  it('should visually show you your mood', function() {
    expect(createPalette(new_palette)).to.not.eql(bitmap); //still working on something viable for this
  });
});
