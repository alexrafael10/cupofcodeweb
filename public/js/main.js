$( document).ready(function()
{
  (
    function() {
      document.getElementById("home").style.height = (window.innerHeight-
        document.getElementById("main-nav").style.height)*0.99+"px";
  }());

  var width = $(window).width();
  $(window).resize(function(){
      document.getElementById("home").style.height = (window.innerHeight-
        document.getElementById("main-nav").style.height)*0.99+"px";

  });
});
