// Hover affect for the "Watch Now"

$(".watch_now").hover(function(){
    $(".play_line").css("background-color", "#005fff");
    $(".play_button").css("color", "#005fff");
    $(".watch_text").css("color", "#005fff");
    }, function(){
        $(".play_line").css("background-color", "grey");
        $(".play_button").css("color", "grey");
        $(".watch_text").css("color", "grey");
    }
);