var ColourfulBlinker = function(top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);

  var oldStep = this.step;

  this.step = function () {
    oldStep.call(this);

    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    this.changeColor(red,green,blue);
  };
}; 

ColourfulBlinker.prototype = Object.create(BlinkyDancer.prototype);
ColourfulBlinker.prototype.constructor = ColourfulBlinker;
ColourfulBlinker.prototype.changeColor = function(red, green, blue) {
 var rgbValue = 'rgb(' + red + ',' + green + ',' + blue + ')';
 this.$node.css('border-color', rgbValue);
};
