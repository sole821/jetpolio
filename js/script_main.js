
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
  var arrowLeft = $('.menu > span:nth-child(1)');
  var workText = $('.menu > span:nth-child(2)');
  var shine = $('.menu > span:nth-child(3)');
  var infoText = $('.menu > span:nth-child(4)');
  var arrowRight = $('.menu > span:nth-child(5)');

  $(document).ready(function(){
    typing();
});
  /* text ani */
 
workText.on({ 
    mouseenter: function() {
        workText.addClass('animate__animated animate__headShake');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        workText.removeClass('animate__animated animate__headShake');
        $(".cursor").removeClass('cursor-grow');
    }
});
  

infoText.on({ 
    mouseenter: function() {
        infoText.addClass('animate__animated animate__headShake');
        $(".cursor").addClass('cursor-grow');
    },
    mouseleave: function() {
        infoText.removeClass('animate__animated animate__headShake');
        $(".cursor").removeClass('cursor-grow');
    }
});


shine.on({ 
    mouseenter: function() {
        shine.addClass('animate__animated animate__flash');
    },
    mouseleave: function() {
        shine.removeClass('animate__animated animate__flash');
    },
    click: function(){
        $('html,body').stop(true).animate({scrollTop: $('.content').offset().top});
    }
});

/* scroll  */
var total_section = 2;
var current_idx = 0;
var page_h = 0;

var _isScroll = false;

$('body').on('mousewheel', function(event) {
  setHeight();
  if (_isScroll) return;

  console.log(current_idx);
    
  var direction = event.originalEvent.wheelDelta;
  var y = 0;

  if(direction > 0){
    // up
    current_idx --;
    if(current_idx < 0){current_idx = 0;}
    y = current_idx * page_h;
  }
  else{
    // down
    current_idx ++;
    if(current_idx > total_section){
      current_idx = total_section;
      current_idx= 0;
    }
    
    y = current_idx * page_h;		
  }
  _isScroll = true;
  //console.log(y);
  $('html,body').stop(true).animate({scrollTop: y}, {duration: 500, complete: function() {
    _isScroll = false;
  }});	
  
});

function setHeight(){
	
	// 높이 설정
	screen_h = document.body.clientHeight;
	page_h = screen_h;
	$("#onepage > section").height(page_h);
}
  
/* artwork */
  const body = document.body;
  const box = document.querySelector('.content');
  const MathUtils = {
      lerp: (a, b, n) => (1 - n) * a + n * b,
      distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1)
  }
  
  const getMousePos = (ev) => {
      let posx = 0;
      let posy = 0;
      if (!ev) ev = window.event;
      if (ev.pageX || ev.pageY) {
          posx = ev.pageX;
          posy = ev.pageY;
      }
      else if (ev.clientX || ev.clientY) 	{
          posx = ev.clientX + box.scrollLeft + docEl.scrollLeft;
          posy = ev.clientY + box.scrollTop + docEl.scrollTop;
      }
      return {x: posx, y: posy};
  }

  let mousePos = lastMousePos = cacheMousePos = {x: 0, y: 0};
  
  box.addEventListener('mousemove', ev => mousePos = getMousePos(ev));
  
  
  const getMouseDistance = () => MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y);

  class Image {
      constructor(el) {
          this.DOM = {el: el};
          this.defaultStyle = {
              scale: 1,
              x: 0,
              y: 0,
              opacity: 0,
          };
          this.getRect();
          this.initEvents();
      }
      initEvents() {
          window.addEventListener('resize', () => this.resize());
      }
      resize() {
          TweenMax.set(this.DOM.el, this.defaultStyle);
          this.getRect();
      }
      getRect() {
          this.rect = this.DOM.el.getBoundingClientRect();
      }
      isActive() {
          return TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
      }
  }

  class ImageTrail {
      constructor() {
          this.DOM = {content: document.querySelector('.content')};
          this.images = [];
          [...this.DOM.content.querySelectorAll('img')].forEach(img => this.images.push(new Image(img)));
          this.imagesTotal = this.images.length;
          this.imgPosition = 0;
          this.zIndexVal = -800;
          this.threshold = 100;
          
          requestAnimationFrame(() => this.render());
      }
      render() {
          let distance = getMouseDistance();
          cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
          cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

          if ( distance > this.threshold ) {
              this.showNextImage();

              ++this.zIndexVal;
              this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
              
              lastMousePos = mousePos;
          }

          let isIdle = true;
          for (let img of this.images) {
              if ( img.isActive() ) {
                  isIdle = false;
                  break;
              }
          }
          if ( isIdle && this.zIndexVal !== 1 ) {
              this.zIndexVal = 1;
          }

          requestAnimationFrame(() => this.render());
      }
      showNextImage() {

          const img = this.images[this.imgPosition];

          TweenMax.killTweensOf(img.DOM.el);

          new TimelineMax()

          .set(img.DOM.el, {
              startAt: {opacity: 0, scale: 1},
              opacity: 1,
              scale: 1,
              zIndex: this.zIndexVal,
              x: cacheMousePos.x - img.rect.width/2,
              y: cacheMousePos.y - img.rect.height/2
          }, 0)

          .to(img.DOM.el, 0.9, {
              ease: Expo.easeOut,
              x: mousePos.x - img.rect.width/2,
              y: mousePos.y - img.rect.height/2
          }, 0)

          .to(img.DOM.el, 1, {
              ease: Power1.easeOut,
              opacity: 0
          }, 0.4)

          .to(img.DOM.el, 1, {
              ease: Quint.easeOut,
              scale: 0.2
          }, 0.4);
      }
  }


  const preloadImages = () => {
      return new Promise((resolve, reject) => {
          imagesLoaded(document.querySelectorAll('.content__img'), resolve);
      });
  };
  
  preloadImages().then(() => {
    new ImageTrail();
  });


/*  */
})(jQuery);