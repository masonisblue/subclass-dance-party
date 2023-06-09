// Creates and returns a new dancer object that can step
debugger;
var makeDancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};

  // { $node: ..., step: function (  setTimeout(dancer.step, timebetweensteps)), setPosition: function(top, left), top: top}

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // dancer.step();

  // this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);

  //return dancer;
  makeDancer.prototype.step.call(this);
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step, this.timeBetweenSteps);
};

// makeDancer.prototype.step();

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//makeDancer.prototype.setPosition(this.top, this.left);