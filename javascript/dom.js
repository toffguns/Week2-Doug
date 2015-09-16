$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").append("<li>Hello!</li>");
    $("ul#webpage").append("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye!</li>");
    $("ul#webpage").append("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").append("<li>Stop copying me!</li>");
    $("ul#webpage").append("<li>Pardon me. I meant no offense.</li>");
    $("ul#webpage").children("li").last().click(function() {
      $(this).remove();
    });
  });

  $("button#addstuff").click(function(){
    $("p").before("<h3>This was just added.</h3>");
  });

  $("button#addheader").click(function(){
    $("h1").after("<h2>This is a new header</h2>");
    $(this).remove();
  });
  
});
