var SquareDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="dancer squaredancer"></span>')
    this.setPosition(top, left)
  };
    
  SquareDancer.prototype = Object.create(MakeDancer.prototype);
  SquareDancer.prototype.constructor = SquareDancer;
    
  SquareDancer.prototype.step = function() {
    MakeDancer.prototype.step.call(this);
  };