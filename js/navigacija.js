$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".navbar").addClass("changecolor");
    } else {
       $(".navbar").removeClass("changecolor");
    
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop()>200) {
        $(".nlcol").addClass("change1");
    }
    else {
        $(".nlcol").removeClass("change1");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop()>200) {
        $(".nbcol").addClass("change1");
    }
    else {
        $(".nbcol").removeClass("change1");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop()>200) {
        $(".navtog").addClass("changenavtog");
    }
    else {
        $(".navtog").removeClass("changenavtog");
    }
});

