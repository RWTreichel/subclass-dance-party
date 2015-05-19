describe("Dancer", function() {

  var dancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it("should exist", function() {
    expect(typeof Dancer).to.eql('function');
  });

  it("should have a jQuery $Node object", function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("step", function() {
    it("should have a step function", function() {
     expect(typeof dancer.step).to.eql('function');
    });

    it("should call step at least once per second", function(){
      sinon.spy(dancer, "step");
      expect(dancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });

  describe('setPosition', function() {
    it("should have a setPosition function", function() {
      expect(typeof dancer.setPosition).to.eql('function');
    });

    it("should set the top and left CSS", function() {
      expect(dancer.$node.css('top')).to.eql('10px');
      expect(dancer.$node.css('left')).to.eql('20px');
    });
  });
});
