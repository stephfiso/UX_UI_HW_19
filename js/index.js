console.log("YOU WIN, KID :)");
$(document).ready(function (){
    $("nav ul li").click(function() {
        if ($(this).text().toLowerCase() === "work") {
            $('html, body').animate({
                scrollTop: $(".myWork").offset().top
            }, 2000);
        }
    });
});
$(document).ready(function () {
    $("#hamburger").click(function () {
        $("#menu").toggleClass("show");
    });
});