$(function() {
    var x = $("#one").css("background-color");

    $("ul").append("<p>" + "Color was: " + x + "</p>");



    $("li").css({
                "background-color": "#C5A996",
                "border" : "1px solid white",
                "color" : "black",
                "text-shadow" : "none",
                "font-family" : "Georgia"
                });

});
