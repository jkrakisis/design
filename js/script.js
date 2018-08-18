$(window).on("load scroll", function(){
  if ($(window).scrollTop() > 10){
    $('#header, .go-top').addClass('fixed');
  }else{
    $('#header, .go-top').removeClass('fixed');
  }
});
$(document).ready(function(){

  setTimeout(function(){ $('body').addClass("start"); },200);
  setTimeout(function(){ $("#header").addClass("start");  },500);
  setTimeout(function(){ $(".popup-cont").addClass("active");  },600);
  setTimeout(function(){ $(".popup").addClass("active");  },600);
  setTimeout(function(){ $(".popup-open").addClass("active");  $("#header").css('top','150px'); },600);

  setTimeout(function(){ $(".popup-cont").removeClass("active");  },1000);
  setTimeout(function(){ $(".popup").removeClass("active");  },1000);
  setTimeout(function(){ $(".popup-open").removeClass("active");  $("#header").css('top','0'); },1000);

  $("#header").mouseenter(function(){
    $(this).addClass("hover");
  });
  $("#header").mouseleave(function(){
    $(this).removeClass("hover");
  });
  $(".all-menu-open").click(function(){
    $(".all-menu").addClass("active");
  });
  $(".all-menu").click(function(){
    $(this).removeClass("active");
  });
  $(".search").click(function(){
    $(".search-zone").addClass("active");
  });
  $(".search-zone").click(function(){
    $(this).removeClass("active");
  });
  $(".popup-cont").click(function(){
    $(this).removeClass("active");
    $("#header").css('top','0');
  });
  $(".popup-open").click(function(){
    $(this).parent().addClass("active");
    $(".popup-cont").addClass("active");

    if ($('.popup-open').hasClass('active')){
      $(this).removeClass("active");
      $(".popup-cont").removeClass("active");
      $(".popup").removeClass("active");
      $("#header").css('top','0');
    }else{
      $(this).addClass("active");
       $(".popup-cont").addClass("active");
       $(".popup").addClass("active");
       $("#header").css('top','150px');
    }
  });

  $(".go-top>a").on('click', function() {
		event.preventDefault ? event.preventDefault() : (event.returnValue = false);
		var hash = this.hash;
		$('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});
  });
  $(window).load(function(){
    setTimeout(function(){
    var visualSlide = $('#visual .slide-list').bxSlider
    ({
      auto			: true,
      speed			: 7000,
      pause			: 9000,
      minSlides: 1,
      mode			: 'fade',
      autoControls	: true,
      autoControlsCombine : true,
      controls		: true,
      pager : false,
      onSliderLoad:function(currentIndex){
        $(".slide-list li:not([class='bx-clone'])").eq(0).addClass('active');
        $('#visual .control-zone .counter .current').text(currentIndex + 1);
        $('.progress').addClass('active').removeClass('inactive');
      },
      onSlideAfter 	: function(currentSlide, totalSlides, currentSlideHtmlObject)
      {
        currentSlide.addClass('active');
        $('.progress').addClass('active').removeClass('inactive');
        
      },
      onSlideBefore:function($slideElement, oldIndex, newIndex){
          $('.slide-list').find('li').removeClass('active');
          $('#visual .control-zone .counter .current').text(newIndex + 1);
          $('.progress').removeClass('active').addClass('inactive');
        }
    });

  },1000);
});
$('#visual .control-zone .counter .total').text($('#visual .slide-list li').length);
  // setTimeout(function(){
  //   $('#visual .list2').addClass('active');
  // },5000);


  $(".sns-close").click(function(){
    $(".sns-section").removeClass("active");
    return false;
  });

  /*----------------------------
    SCROLLMAGIC
    ----------------------------*/
    var ctrl = new ScrollMagic.Controller();

    /*----------------------------
    반복
    ----------------------------*/

    var scene_list ='.section1, .section2, .section3, .section4, .section5'.split(', ');
    console.log(scene_list);

    scene_list.forEach(function(el_selector, idx){
      console.log(el_selector);
      var scene = new ScrollMagic.Scene({
        'triggerElement' : el_selector,
        'triggerHook':0,
        'offset':-500,
      })
      .setClassToggle(el_selector, 'active')
      .addTo(ctrl);
    });

    /*
    new ScrollMagic.Scene({ 'triggerElement': '.visual',  'triggerHook': 0,  'offset': 400 })
    .setPin('.visual')
    .addTo(ctrl);
    */



});
$(document).ready(function() {
//원페이지

  $(window).scroll(function (event) {
    var $window = $(this).scrollTop();
    if ($window >= 320) {
      $('#header').addClass('fix');
      $("#header").css('top','0');
    } else {
       $('#header').removeClass('fix');
       $("#header").css('top','auto');
    }
  });

  // get sections top position
  function getTargetTop(elem) {

    var id = elem.attr("href"),
      offset = 1;

    // gets the distance from the top and subtracts the height of the nav
    return $(id).offset().top - offset;
  }

  // @action: mark the current navigation item


  function checkSectionSelected(scrolledTo) {
    var sections = $('.page-nav-menu li a[href^="#"]'),
      threshold = 100,
      // how close the top has to be to the section
      i;
    sections.parent().removeClass("active");
    for (i = 0; i < sections.length; i++) {

      var section = $(sections[i]),
        target = getTargetTop(section);

      // if section is at the top of the page
      if (scrolledTo > target - threshold && scrolledTo < target + threshold) {

        // remove all selected elements
        sections.parent().removeClass("active");

        // add current selected element
        section.parent().addClass("active");
      }

    }
  }

  // if page is already scrolled to a section
    checkSectionSelected($(window).scrollTop());
    $(window).scroll(function (e) {
      checkSectionSelected($(window).scrollTop());
    });

  // @action: scroll to an element by id
    $(function () {
      $('.page-nav-menu li a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          var customoffset = 40;
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            var targetOffset = $target.offset().top
            $('html,body').animate({
              scrollTop: targetOffset - customoffset

            }, 800);
            //$this.hash.replace(/^#/, '');

            return false;
          }
        }
      });
    });
    $('.scroll-top').slideUp();
    // @action: scroll to top
    $(window).scroll(function () {
      if ($(this).scrollTop() !== 0) {
        $('.scroll-top').slideDown();
      } else {
        $('.scroll-top').slideUp();
      }
    });
    $(".scroll-top").click(function () {
      $('body,html').stop().animate({
        scrollTop: 0
      }, 800);
    });

  });