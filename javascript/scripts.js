$(document).ready(function() {
  //click and shows alert box
    $("h1").click(function() {
      alert("This is a header.");
    });
  //click and shows alert box
    $("p").click(function() {
      alert("This is a paragraph.");
    });
  //click and shows alert box
    $("img").click(function() {
      alert("This is an image.");
    });
  //double-click to show alert box
    $("ul").dblclick(function(){
      alert("this is an unordered list.");
    });
  //click to toggle hiding and showing image
    $(".clickable").click(function() {
      $("#walrus-showing").toggle();
      $("#walrus-hidden").toggle();
    });
  //click to toggle hiding and showing image with fade effects
    $(".sfclickable").click(function(){
      $("#sf-fadein").fadeToggle("slow");
      $("#sf-fadeout").fadeToggle("slow");
    });
  //click to toggle hiding and showing image with sliding effects
    $(".sffclickable").click(function(){
      $("#sf-slidein").slideToggle("slow");
      $("#sf-slideout").slideToggle("slow");
    });
  //click to show content(will not hide content)
    $(".clicksandcastle").click(function(){
      $("#sandcastles-content").show();
    });

});
