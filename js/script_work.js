(function($) {

    const content = $('.content');

    const title = $('.title');
    const type = $('.type');
    const text = $('.text');
    const tool = $('.tool');
    const date = $('.date');
    const blackLine = $('.black-line');



    var num = $('.btn-area > .number');

    num.on('click', function() {
        $('html,body').animate({scrollTop:0}, 500); 
    });


    $(document).ready(function(){
        
        /* content.each(function () {
         $(this).addClass('animate__animated animate__fadeInUp'); 
        }); */

        content.children().each(function (index) {
            $(this).addClass('animate__animated animate__fadeInUp');
            if (index === 3) {
                text.children().addClass('animate__animated animate__fadeInUp');
            }

        });


     });



})(jQuery);