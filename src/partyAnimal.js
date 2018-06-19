var PartyAnimalDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};
  
PartyAnimalDancer.prototype = Object.create(MakeDancer.prototype);
PartyAnimalDancer.prototype.constructor = PartyAnimalDancer;
  
PartyAnimalDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

PartyAnimalDancer.prototype.changeColor = function() {
  this.$node;
};