console.log("Script Load");

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

console.log($width);

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
        /* console.log('complete'); */
        $('.text-box').addClass('animate__animated animate__fadeIn');
        setTimeout(function(){
            $('.thumbnail').removeClass('animate__animated animate__fadeInUp');
        },1000);
    }});  
}

$(".item").on({ 
    mouseenter: function() {
        $(".text-box").addClass('text-color');
        $('.thumbnail').addClass('animate__animated animate__fadeInLeft');
        $('.thumbnail').css('opacity','1');
    },
    mouseleave: function() {
        $(".text-box").removeClass('text-color');
        $('.thumbnail').removeClass('animate__animated animate__fadeInLeft');
        $('.thumbnail').css('opacity','0');
    }
});

$("nav").children('a').on({ 
    mouseenter: function() {
        $(this).addClass('text-color');
    },
    mouseleave: function() {
        $(this).removeClass('text-color');
    }
});

$(".arrow-b").on({ 
    mouseenter: function() {
        $(this).children('img').addClass('animate__animated animate__pulse');
    },
    mouseleave: function() {
        $(this).children('img').removeClass('animate__animated animate__pulse');
    }
});



/*  */
workBox.on('click', function(){
    $detail.css('transform','translateY(0%)');
    $detail.css('display','block');
    var $number = $(this).attr("id");
    detail_load($number);
    setTimeout(detail_ani(),3000);
});

$Bbtn.on('click',function(){
    $detail.css('transform','translateY(100%)');
    $detail.css('display','none');
});


/* detail */
const content = $('.content');

const title = $('.title');
const type = $('.type');
const text = $('.text');
const tool = $('.tool');
const date = $('.date');
const imgBox = $('.img-box');
const blackLine = $('.black-line');

var num = $('.btn-area > .number');

function detail_load($number) {
    console.log($number);

    var title_info = Myworks[$number].title;
    console.log(title_info);
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
}

function detail_ani(){

}

num.on('click', function() {
    $('html,body').animate({scrollTop:0}, 500); 
});



/*  */
})(jQuery);