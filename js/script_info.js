console.log("Script Load");

let mouseCursor = document.querySelector(".cursor");
let title_hover = document.querySelectorAll("text-box span");

    window.addEventListener("scroll ", cursor);
    window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}

(function($) {

    var profile_text = $('.profile').children();


    $('.bold-list').children().on({ 
        mouseenter: function() {
            var index = $("li").index(this);
            //console.log(index);
            $(this).addClass('text-color');
            $('.normal-list').children("li:eq(" + index + ")").addClass('text-color');
        },
        mouseleave: function() {
            var index = $("li").index(this);
            $(this).removeClass('text-color');
            $('.normal-list').children("li:eq(" + index + ")").removeClass('text-color');
        }
    });


    $("nav").on({ 
        mouseenter: function() {
            $(this).addClass('text-color');
        },
        mouseleave: function() {
            $(this).removeClass('text-color');
        }
    });

    $(".name").on({ 
        mouseenter: function() {
            $(this).addClass('text-color');
        },
        mouseleave: function() {
            $(this).removeClass('text-color');
        }
    });


    var circle = $('.circle');

    circle.addClass('animate__animated animate__rotateInUpLeft');
    //console.log(detail_text);

    for (var i=0; i < circle.length; i++) {
        
        var str = i * 250 + "ms";
        circle[i].style['animation-delay'] = str;
    }

    var $title = $('.title').children('span');
    $title.addClass('animate__animated animate__fadeInUp');
    for (var i=0; i < $title.length; i++) {
        
        var str = i * 250 + "ms";
        $title[i].style['animation-delay'] = str;
    }

    $(".title").on({ 
        mouseenter: function() {
            $(this).addClass('text-color');
            $('.shadow').css('opacity','1');
            $('.shadow').addClass('slow');
            $('.shadow').css('transform','scale(1.05)');
        },
        mouseleave: function() {
            $(this).removeClass('text-color');
            $('.shadow').css('opacity','0');
            $('.shadow').removeClass('slow');
            $('.shadow').css('transform','');
        }
    });


})(jQuery);