console.log("YOU WIN, KID :)");
$(document).ready(function (){
    $("nav ul li").click(function() {
        $('html, body').animate({
            scrollTop: $(".myWork").offset().top
        }, 2000);
    });
});
