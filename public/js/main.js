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

    var name,email,number,subject,content;
    $("#submit").click(function(){
      name = $("#name").val();
      email = $("#email").val();
      number = $("#number").val();
      subject = $("#subject").val();
      content = $("#content").val();

      $.post("/send",{name:name, email:email,number:number,subject:subject,content:content} ,function(data) {

      } );
    });

		$.stellar();

    $(".toggle-1").click( function() {
      $(".toggle-2").removeClass("active");
      $(".toggle-1").addClass("active");
      $(".detail-2").hide();
      $(".detail-1").show(1000);
    });

    $(".toggle-2").click( function() {
      $(".toggle-1").removeClass("active");
      $(".toggle-2").addClass("active");
      $(".detail-1").hide();
      $(".detail-2").show(1000);
    });
});
