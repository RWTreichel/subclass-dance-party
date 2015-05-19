var ColourfulBlinker = function(top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);
};

ColourfulBlinker.prototype = Object.create(BlinkyDancer.prototype);
ColourfulBlinker.prototype.constructor = ColourfulBlinker;