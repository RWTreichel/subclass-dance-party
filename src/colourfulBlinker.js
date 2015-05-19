var ColourfulBlinker = function (top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);

  var oldStep = this.step;

  this.step = function () {
    oldStep.call(this);

    this.changeColor(APP.randomRGB());
  };
};

ColourfulBlinker.prototype = Object.create(BlinkyDancer.prototype);
ColourfulBlinker.prototype.constructor = ColourfulBlinker;
ColourfulBlinker.prototype.changeColor = function (color) {
  this.$node.css('border-color', color);
};
