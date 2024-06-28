var typed = new Typed(".movable", {
    strings: ["Python Programmer", "Full Stack Developer"],
    typespeed: 10,
    backspeed: 10,
    loop: true,
});

$(window).scroll(function() {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black")
    }
});

AOS.init();