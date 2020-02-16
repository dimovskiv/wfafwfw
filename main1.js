$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".navbar").addClass("changecolor")
        $('.navbar-brand img').attr("src","./logo/2.png");
      
    } else {
       $(".navbar").removeClass("changecolor");
       $('.navbar-brand img').attr("src","./logo/1.png");
    }
})

