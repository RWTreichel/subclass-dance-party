var Throbber = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  var oldStep = this.step;

  this._lastCalled = true;

  this.step = function() {
    oldStep.call(this);

    // new functionality
    this.throb();
  };
};

Throbber.prototype = Object.create(Dancer.prototype);
Throbber.prototype.constructor = Throbber;
Throbber.prototype.throb = function() {
  this._lastCalled ? this.doubleSize() : this.halfSize();
  this._lastCalled = !this._lastCalled;
};
Throbber.prototype.doubleSize = function() {
  var widthString = this.$node.css('border-width');
  var width = +widthString.slice(0, widthString.length - 2) * 2;
  this.$node.css('border-width', width);
};
Throbber.prototype.halfSize = function() {
  var widthString = this.$node.css('border-width');
  var width = +widthString.slice(0, widthString.length - 2) * (1/2);
  this.$node.css('border-width', width);
};