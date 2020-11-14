console.log("Script Load");

(function($) {
/*  */

var arrowBtn = $('.arrow');
var workBox = $('.item');

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
    var left = 1250 * _cuId * -1;
    /* var duration = 350 + Math.abs(_exId - _cuId) * 150; */
    workBox.stop(true).animate({'left' : left}, {duration: 800, complete: function () {
        /* console.log('complete'); */
        $('.text-box').css('opcity','1');
        $('.text-box').addClass('animate__animated animate__fadeInDown');
        setTimeout(function(){
            $('.text-box').removeClass('animate__animated animate__fadeInDown');
            /* workBox.removeClass('animate__animated animate__slideInRight'); */
        },1000);
    }});   
});

/* 스크롤 제어 */
$('body').on('scroll mousewheel', function(event) {	
		       
    var direction = event.originalEvent.wheelDelta; //마우스 휠 방향

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
    var left = 1250 * _cuId * -1;

    workBox.stop(true).animate({'left' : left}, {duration: 800, complete: function () {
        /* console.log('complete'); */
        // $('.text-box').css('opcity','1');
        // $('.text-box').addClass('animate__animated animate__fadeInDown');
        setTimeout(function(){
            $('.text-box').removeClass('animate__animated animate__fadeInDown');
            /* workBox.removeClass('animate__animated animate__slideInRight'); */
        },1000);
    }});
});

/*  */

var pic = $('.pic-container > div > a > img');

workBox.on('mouseover', smallSize);

function smallSize() {
    // console.log('enter');
    //workBox.animate({'width' : '500px'},{duration: 800});
    // pic.css('width','20%');
}




/*  */
})(jQuery);