var PartyAnimalDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="partyanimal"></span>')
  this.setPosition(top, left)
};
  
PartyAnimalDancer.prototype = Object.create(MakeDancer.prototype);
PartyAnimalDancer.prototype.constructor = PartyAnimalDancer;
  
PartyAnimalDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.toggle("pulsate");
};

// PartyAnimalDancer.prototype.changeColor = function() {
//   this.$node;
// };