$(document).ready(function() {
  window.dancers = [];


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000 
    );
    window.dancers.push(dancer.$node);

    $('.dancefloor').append(dancer.$node);
  });

  // Get Low function that brings dancers down
  $('.getLow').on('click', function(e){

    window.dancers.forEach(function(dancer, i){
      dancer.css('top', '80vh');
    })
  });

  $(document).on('mouseenter', '.squaredancer', function(e) {
    $(this).css('border-color', 'white');
  });

  $(document).on('mouseleave', '.squaredancer', function(e) {
    $(this).css('border-color', '#D980FA');
  });
 

  // POLICE


  $('.cops').on('click', function(){
    $('.policeofficer').css('opacity', 1);
    
    var copTop = $('.policeofficer')[0].offsetTop;
    var copLeft = $('.policeofficer')[0].offsetLeft;
    var toprange = [copTop + 500, copTop - 500];
    var leftrange = [copLeft + 500, copLeft - 500];
    window.dancers.forEach(function(dancer, i) {
      if (dancer[0].offsetTop < toprange[0] && dancer[0].offsetLeft > toprange[1]) {
        if (dancer[0].offsetLeft < leftrange[0] && dancer[0].offsetLeft > leftrange[1]) {
          // dancer.css('display', 'none');
          dancer.css('top', toprange[Math.floor(Math.random() * 2)]);
          dancer.css('left', leftrange[Math.floor(Math.random() * 2)]);
        }
      }
    });
  });

  // function getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  // }
});

