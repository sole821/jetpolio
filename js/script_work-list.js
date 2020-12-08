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
/*  */



$(document).ready(function(){
    console.log('now ready');
    $('nav').addClass('animate__animated animate__fadeIn');
    $('.arrow-b').addClass('animate__animated animate__zoomIn');
    $('.pic-content').addClass('animate__animated animate__flipInX');
});

const $detail = $('.work-detail');
const $Bbtn = $('.back-btn');

var arrowBtn = $('.arrow-b');
var workBox = $('.item');
var $picCon = $('.item')[0];
var $width = $picCon.clientWidth;

const content = $('.content');

const title = $('.title');
const type = $('.type');
const text = $('.text');
const tool = $('.tool');
const date = $('.date');
const imgBox = $('.img-box');
const blackLine = $('.black-line');

var num = $('.btn-area > .number');

//console.log($width);

var _cuId = 0,
    _exId = _cuId,
    _max = workBox.length;

var _isAni = false;


/* 버튼제어 */
arrowBtn.on('click',function(e){
    var $el =  $(e.currentTarget);
    if ($el.hasClass('left')){
        //console.log('prev');
        _cuId--;
        if(_cuId < 0) {
        _cuId = _max -1;
        }
    } else if($el.hasClass('right')){
        //console.log('next');
        _cuId++;
        
        if(_cuId > _max - 1) {
        _cuId = 0;
        }
    }
    var left = $width * _cuId * -1;
    /* var duration = 350 + Math.abs(_exId - _cuId) * 150; */
    Content_animation(); 
});

/* 스크롤 제어 */
$('body').on('scroll mousewheel', function(event) {	
	if ($detail.css("display") == "block") return;
    var direction = event.originalEvent.wheelDelta;
    //마우스 휠 방향

    if( direction > 0){
        // up
        _cuId--;
        if(_cuId < 0) {
        _cuId = _max -1;
        }
    }
    else{
        _cuId++;
        
        if(_cuId > _max - 1) {
        _cuId = 0;
        }	
    }
  
    Content_animation(); 
});

function Content_animation() {
    var left = $width * _cuId * -1;
    workBox.stop(true).animate({'left' : left}, {duration: 800, complete: function () {
        setTimeout(function(){
            $('.thumbnail').removeClass('animate__animated animate__fadeInUp');
        },1000);
    }});  
}

$(".item").on({ 
    mouseenter: function() {
        $(".text-box").addClass('text-color');
        $('.thumbnail').css('opacity','1');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        $(".text-box").removeClass('text-color');
        $('.thumbnail').css('opacity','0');
        $(".cursor").removeClass('cursor-grow');
    }
});

$("nav").children('a').on({ 
    mouseenter: function() {
        $(this).addClass('text-color');
        $(".cursor").addClass('cursor-grow');

    },
    mouseleave: function() {
        $(this).removeClass('text-color');
        $(".cursor").removeClass('cursor-grow');
    }
});

$Bbtn.on({ 
    mouseenter: function() {
        $(this).addClass('text-color');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        $(this).removeClass('text-color');
        $(".cursor").removeClass('cursor-grow');
    }
});

$(".arrow-b").on({ 
    mouseenter: function() {
        $(this).children('img').addClass('animate__animated animate__pulse');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        $(this).children('img').removeClass('animate__animated animate__pulse');
        $(".cursor").removeClass('cursor-grow');
    }
});

$(".btn-area").children('span').on({ 
    mouseenter: function() {
        $(this).addClass('text-color');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        $(this).removeClass('text-color');
        $(".cursor").removeClass('cursor-grow');
    }
});

$(".btn-area").children('div').on({ 
    mouseenter: function() {
        $(this).addClass('text-color');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        $(this).removeClass('text-color');
        $(".cursor").removeClass('cursor-grow');
    }
});


$(".active").on({ 
    mouseenter: function() {
        $(this).addClass('text-color');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        $(this).removeClass('text-color');
        $(".cursor").removeClass('cursor-grow');
    }
});


/*  */
workBox.on('click', function(){
    $detail.css('transform','translateY(0%)');
    $detail.removeClass('inHidden');
    var $number = $(this).attr("id");
    $Bbtn.children().css('opacity','1');
    detail_load($number);
    //$('.cursor').addClass('cursor_b');
    //로드가 완료된 상태 일 때 스크롤 가능하게 하기 (상태체크하기)
});

$Bbtn.on('click',function(){
    $detail.css('transform','translateY(100%)');
    $detail.addClass('inHidden');
    $Bbtn.children().css("opacity",'0');
    //$('.cursor').removeClass('cursor_b');
    //$('.black-line').stop(true).css("width", "0%");
});


/* detail */

function detail_load($number) {
    console.log($number);
    
    var title_info = Myworks[$number].title;
    title.html(title_info);

    var type_info = Myworks[$number].type;
    type.html(type_info);

    var text_info = Myworks[$number].text;
    text.html(text_info);

    var tool_info = Myworks[$number].tool;
    tool.html(tool_info);

    var date_info = Myworks[$number].date;
    date.html(date_info);
    
    var img_info = Myworks[$number].img;
    imgBox.html(img_info);

    var count_info = Myworks[$number].count;
    $('.number').html(count_info);

    var next_info = Myworks[$number].next;
    $('.next').children('span').html(next_info);

    var prev_info = Myworks[$number].prev;
    $('.prev').children('span').html(prev_info);

    /* overflow hidden > auto / 안되면 강제로 0으로 */  
    detail_ani(); 
    Content_animation(); 

    $('.next').on('click',function(){
        if (Number($number) == 5 ) {
            console.log("5이상");
            $('html,body').stop(true).animate({scrollTop: 0}, { complete: function() {
                detail_load(0);
            }});
            return;
        }
        $number = Number($number) + 1;
        $('html,body').stop(true).animate({scrollTop: 0}, { complete: function() {
            detail_load($number);
        }});
    });
    $('.prev').on('click',function(){
        if (Number($number) == 0 ) {
            $('html,body').stop(true).animate({scrollTop: 0}, { complete: function() {
                detail_load(5);
            }});
            return;
        }
        $number = Number($number) - 1;
        $('html,body').stop(true).animate({scrollTop: 0}, { complete: function() {
            detail_load($number);
        }});
    });
      
}

/* 로드 애니메이션 */
function detail_ani(){
    $('.work-detail').removeClass('start');
    
    var detail_text = content.children();
    $('.black-line').stop(true).css("width", "0%");
    
    detail_text.addClass('animate__animated animate__fadeIn');
    $('.black-line').animate( {
        width: '90%'
      }, 1000, 'swing');

    for (var i=0; i < detail_text.length; i++) {
        var str = i * 250 + "ms";
        detail_text[i].style['animation-delay'] = str;
    }
    setTimeout(function(){
        detail_text.removeClass('animate__animated animate__fadeIn');
        //$('.black-line').css('width','0');
    },3000);
}

/* 스크롤 애니메이션 */
function bottom_ani(){
    var bottom_text = $('.btn-area').children();

    $('.black-line2').stop(true).css("width", "0%");
    
    bottom_text.addClass('animate__animated animate__fadeIn');
    for (var i=0; i < bottom_text.length; i++) {
        var str = i * 500 + "ms";
        bottom_text[i].style['animation-delay'] = str;
    }

    $('.black-line2').animate( {
        width: '90%'
    }, 1000, 'swing');
    $('.black-line2').css('width','0');

    setTimeout(function(){
        bottom_text.removeClass('animate__animated animate__fadeIn');
    },3000);
}

/* 이 밑으로 이벤트 따로 분리하기 */
var $window = $(window);

/* scroll */
$window.on('scroll', function () {
    var position = $(window).scrollTop() + $(window).height();
    //console.log(position);

    /* 에러 안나게 if문 처리하기 */
    $('.target-section.ready').each(function () {
        if (!$(this).hasClass('active') && $(this).offset().top < position) {
            console.log($(this).offset().top);
            $(this).addClass('active');
            $(this).removeClass('ready');

            if ($(this).hasClass('active') && !$(this).hasClass('vedio')){
                $(this).on({
                    mouseenter: function(){
                        $(this).addClass('big');
                    },
                    mouseleave: function(){
                        $(this).removeClass('big');
                    }
                });
            }
        } 
    });
    if (!$('.work-detail').hasClass('start') && $('.black-line2').offset().top < position) {
        //console.log('line ani start');
        bottom_ani();
        $('.work-detail').addClass('start');
    }
});


num.on('click', function() {
    $('html,body').animate({scrollTop:0}, 500); 
});


/*  */
})(jQuery);


