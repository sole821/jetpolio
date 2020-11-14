

(function($) {
/*  */
   


  var arrowLeft = $('.menu > span:nth-child(1)');
  var workText = $('.menu > span:nth-child(2)');
  var shine = $('.menu > span:nth-child(3)');
  var infoText = $('.menu > span:nth-child(4)');
  var arrowRight = $('.menu > span:nth-child(5)');

  /* text ani */
  workText.on('mouseover', function(){
    workText.addClass('animate__animated animate__headShake');
    // arrowLeft.addClass('animate__animated animate__headShake');
  });
  workText.on('mouseleave', function(){
    workText.removeClass('animate__animated animate__headShake');
    // arrowLeft.removeClass('animate__animated animate__headShake');
  });
  

  infoText.on('mouseover', function(){
    infoText.addClass('animate__animated animate__headShake');
    // arrowRight.addClass('animate__animated animate__headShake');
  });
  infoText.on('mouseleave', function(){
    infoText.removeClass('animate__animated animate__headShake');
    // arrowRight.removeClass('animate__animated animate__headShake');
  });



  shine.on('mouseover', function(){
    shine.addClass('animate__animated animate__flash');
  });

  shine.on('mouseleave', function(){
    shine.removeClass('animate__animated animate__flash');
  });



/*  */
})(jQuery);