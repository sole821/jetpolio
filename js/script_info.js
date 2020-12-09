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
    var circle = $('.circle');

    $( document ).ready(function() {
        circle.addClass('animate__animated animate__rotateInDownRight');

            for (var i=0; i < 2; i++) {
                
                var str = i * 250 + "ms";
                circle[i].style['animation-delay'] = str;
            }
        text_ani();
    });
    

    function text_ani(){
       console.log('ani_me');
        var $title = $('.title').children('span');
        $title.addClass('animate__animated animate__fadeInUp');
        for (var i=0; i < $title.length; i++) {
            
            var str = i * 250 + "ms";
            $title[i].style['animation-delay'] = str;
        }

        var $bold_list = $('.bold-list').children('li');
        var $normal_list = $('.normal-list').children('li');

        $bold_list.addClass('animate__animated animate__fadeInUp');
        $normal_list.addClass('animate__animated animate__fadeInUp');

        for (var i=0; i < $bold_list.length; i++) {
            
            var str = i * 250 + "ms";
            $bold_list[i].style['animation-delay'] = str;
            $normal_list[i].style['animation-delay'] = str;
        }
        

        $('.profile-title').addClass('animate__animated animate__fadeInUp');
        $('.name').children().addClass('animate__animated animate__fadeInUp');
    }

    /*$(".name").on({ 
        mouseenter: function() {
            $(this).addClass('text-color');
        },
        mouseleave: function() {
            $(this).removeClass('text-color');
        }
    }); */
    /* $('.bold-list').children().on({ 
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
    }); */
    $(".myName").on({ 
        mouseenter: function() {
            $('.pic').addClass('show');
            $('.pic').children().addClass('animate__animated animate__tada');
        },
        mouseleave: function() {
            $('.pic').children().removeClass('animate__animated animate__tada');
            $('.pic').removeClass('show');
        }
    });

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

    $('a').on({ 
        mouseenter: function() {
            $(this).addClass('text-color');
            $(".cursor").addClass('cursor-grow');
        },
        mouseleave: function() {
            $(this).removeClass('text-color');
            $(".cursor").removeClass('cursor-grow');
        }
    });



    var $window = $(window);

    /* scroll */
    $window.on('scroll', function () {
        var position = $(window).scrollTop() + $(window).height();

        $('.title2').children('span').each(function () {
            if ($window.height()/2 <= $(window).scrollTop() ) {
                //console.log($(this).offset().top);
                var circle2 = $('.circle2');
            circle2.addClass('animate__animated animate__rotateInDownRight');

            for (var i=0; i < 2; i++) {
                var str = i * 250 + "ms";
                circle2[i].style['animation-delay'] = str;
            }
            circle2.css('opacity','1');

                var $title2 = $('.title2').children('span');
                $title2.addClass('animate__animated animate__fadeInUp');
            
                for (var i=0; i < $title2.length; i++) {
                    var str = i * 550 + "ms";
                    $title2[i].style['animation-delay'] = str;
                }
            } 
        });
    });


})(jQuery);