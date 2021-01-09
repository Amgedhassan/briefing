$(function () {

    //Sticky Nav
    var headerHeight = $('header').height();
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > headerHeight) { 
                    $('.navigation').addClass('sticky');
                    $(".navigation").removeClass("container-fluid");
                    $("#logo").attr("src","images/logo_dark.svg");
                    $(".navbar-toggler").css("background-color","#5595bd");
			    } else {
                    $('.navigation').removeClass('sticky'); 
                    $("#logo").attr("src","images/Logo.svg");
                    $(".navbar-toggler").css("background-color","transparent");
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
        

    $("#calls_samples").hide();
    $("h1").animate({
        "left": "0",
        "opacity": "1"
    }, 1000);

    $(".hero_marks").animate({
        "right": 0,
        "opacity": "1"
    }, 1000, function () {
        $("#calls_samples").fadeIn(1000);
    });

    $("nav").hide();
    $("nav").slideDown(500);


    $(".video").hide();
    $(".video_player").click(function () {
        $(".video").show();
        $(".video").click(function () {
            $(".video").hide();
        });
    });

    // VIDEO PLAYER ANIMATION
    window.onscroll = function () { myFunction() };

    var videoSection = document.getElementById("take_tour");
    var videoPlayer = document.getElementById("video_player");

    var videoAnimate = videoSection.offsetTop + 360;

    function myFunction() {
        if (window.pageYOffset >= videoAnimate) {
            videoPlayer.classList.add("animate__pulse");
            console.log(videoAnimate);

        }
    }

    $("#video_three").hide();
    $("#video_two").hide();

    $("#item_one").click(function () {
        $("#video_three").hide();
        $("#video_two").hide();
        $("#video_one").show();
        $("#item_two, #item_three").removeClass("item_acitive");
        $("#item_one").addClass("item_acitive");
    });

    $("#item_two").click(function(){
        $("#video_three").hide();
        $("#video_one").hide();
        $("#video_two").show();
        $("#item_one, #item_three").removeClass("item_acitive");
        $("#item_two").addClass("item_acitive");
    });

    $("#item_three").click(function(){
        $("#video_two").hide();
        $("#video_one").hide();
        $("#video_one").show();
        $("#item_one, #item_two").removeClass("item_acitive");
        $("#item_three").addClass("item_acitive");
    });

});