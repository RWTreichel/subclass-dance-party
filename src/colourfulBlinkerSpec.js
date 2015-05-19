describe('ColourfulBlinker', function() {

  var colourfulBlinker;
  var timeBetweenSteps = 100
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colourfulBlinker = new ColourfulBlinker(10, 20, timeBetweenSteps);
  });

  it('should exist', function() {
    expect(typeof colourfulBlinker).to.eql('function');
  });

  it("should have a jQuery $Node object", function() {
    expect(colourfulBlinker.$node).to.be.an.instanceof(jQuery);
  });
});