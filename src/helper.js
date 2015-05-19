(function(global) {
  global.APP = {};
  global.APP.randomInteger = function (maxValue) {
    return Math.floor(Math.random() * maxValue);
  };

  global.APP.randomRGB = function () {
    var values = [1, 2, 3].reduce(function (memo) {
      memo.push(APP.randomInteger(255));
      return memo;
    }, []).join(',');
    return 'rgb(' + values + ')';
  };
}(this));
