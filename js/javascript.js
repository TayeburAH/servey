$(document).ready(function () {

// background image parallax effect
$('.parallax-window').parallax({imageSrc: 'img/background_sky.jpg'});
var rellax = new Rellax('.rellax');

$("input,select,textarea").focus(function(){
$(this).css({"background-color":"rgba(149, 165, 166,0.5)"})
});
$("input,select,textarea").blur(function(){
$(this).css("background-color","rgba(236, 240, 241,0.5)")});

$("button").click(function (){
          $("nav").toggleClass("navbar-down");
          $(".navbar-toggler").toggleClass("navbar-toggler-down");

      });

$(window).on("click resize", function(event){
    var $trigger = $("button");  		//the thing that is pressed to close it
    var $div = $("nav");  // container
      if( event.target !== $trigger  && !$trigger.has(event.target).length && !$div.has(event.target).length ){
        $("nav").removeClass("navbar-down");
        $(".navbar-toggler").removeClass("navbar-toggler-down");
                  }
              });






});
