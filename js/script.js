$(document).ready(function(){
    $(".box").on(click, function(){
        var clasNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red")
    });
});