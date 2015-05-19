describe('ColourfulBlinker', function() {

  var colourfulBlinker;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colourfulBlinker = new ColourfulBlinker(10, 20, timeBetweenSteps);
  });

  it('should exist', function() {
    expect(typeof ColourfulBlinker).to.eql('function');
  });

  it("should have a jQuery $Node object", function() {
    expect(colourfulBlinker.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(colourfulBlinker.$node, 'toggle');
    colourfulBlinker.step();
    expect(colourfulBlinker.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(colourfulBlinker, "step");
      expect(colourfulBlinker.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colourfulBlinker.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colourfulBlinker.step.callCount).to.be.equal(2);
    });
  });
});