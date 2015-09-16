$(document).ready(function() {
  $("img#cat").click(function(){
    $("ul#catconvo").append("<li>Umm, I think I made the wrong jump...</li>");
    $("ul#dogconvo").append("<li>Hang in there!</li>");
    $("ul#catconvo").children("li").click(function() {
      $(this).remove();
    });
    $("ul#dogconvo").children("li").click(function() {
      $(this).remove();
    });
  });

  $("img#dog").click(function(){
    $("ul#catconvo").append("<li>I am not to be trusted, even with my own children.</li>");
    $("ul#dogconvo").append("<li>Dog here, you can trust me, promise!</li>");
    $("ul#catconvo").children("li").click(function() {
      $(this).remove();
    });
      $("ul#dogconvo").children("li").click(function() {
        $(this).remove();
    });
  });



});
