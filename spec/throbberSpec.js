describe('Throbber', function () {

  var throbber;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    throbber = new Throbber();
  });

  it('should exist', function () {
    expect(typeof Throbber).to.eql('function');
  });

  it('should have a jQuery $Node object', function () {
    expect(throbber.$node).to.be.an.instanceof(jQuery);
  });

  describe('throb', function () {
    it("should exist", function () {
      expect(typeof throbber.throb).to.eql('function');
    });
    xit("should be called with one argument", function () {
      expect(throbber.throb.length).to.eql(1);
    });
    it("should be called at each step", function () {
      sinon.spy(throbber, "throb");
      expect(throbber.throb.callCount).to.eql(0);
      throbber.step();
      expect(throbber.throb.callCount).to.eql(1);
    });
    it("should call doubleSize and halfSize alternatively", function () {
      sinon.spy(throbber, "doubleSize");
      sinon.spy(throbber, "halfSize");
      expect(throbber.doubleSize.callCount).to.eql(0);
      expect(throbber.halfSize.callCount).to.eql(0);
      throbber.throb();
      expect(throbber.doubleSize.callCount).to.eql(1);
      expect(throbber.halfSize.callCount).to.eql(0);
      throbber.throb();
      expect(throbber.doubleSize.callCount).to.eql(1);
      expect(throbber.halfSize.callCount).to.eql(1);
      throbber.throb();
      expect(throbber.doubleSize.callCount).to.eql(2);
      expect(throbber.halfSize.callCount).to.eql(1);
      throbber.throb();
      expect(throbber.doubleSize.callCount).to.eql(2);
      expect(throbber.halfSize.callCount).to.eql(2);
    });
  });

  describe('doubleSize', function () {
    it("should exist", function () {
      expect(typeof throbber.doubleSize).to.eql('function');
    });
    xit("should be called with one argument", function () {
      expect(throbber.throb.length).to.eql(1);
    });
    it('should double the size', function () {
      throbber.$node.css('border-width', '10px');
      expect(throbber.$node.css('border-width')).to.eql('10px');
      throbber.doubleSize();
      expect(throbber.$node.css('border-width')).to.eql('20px');
    });
  });

  describe('halfSize', function () {
    it("should exist", function () {
      expect(typeof throbber.halfSize).to.eql('function');
    });
    xit("should be called with one argument", function () {
      expect(throbber.halfSize.length).to.eql(1);
    });
    it('should halve the size', function () {
      throbber.$node.css('border-width', '10px');
      expect(throbber.$node.css('border-width')).to.eql('10px');
      throbber.halfSize();
      expect(throbber.$node.css('border-width')).to.eql('5px');
    });
  });
});