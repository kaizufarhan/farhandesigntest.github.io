$(document).ready(function(){

  const mq = window.matchMedia( "(min-width: 991px)" );
  const funFacts = [
    "I have an insatiable desire to learn new things.",
    "I love learning about all the latest technologies and exploring design possibilities.",
    "I love thinking on an abstract level.",
    "I play guitar and electronic piano.",
    "I'm setting up a home recording studio to record songs and upload them to Youtube. Stay tuned!",
    "I'm a huge fan of broadway musicals. My favorites include Dear Evan Hansen, RENT, and Hamilton.",
    "I played the role of a drug dealer, a homeless man, an AIDS patient, and a business man in a college production of the musical RENT.",
    "I performed with my college choir in Germany, Czech Republic, and Austria.",
    "I've sung songs in English, Chinese, French, Spanish, German, Czech, Hebrew, Italian, Russian, Ukrainian, Japanese, Arabic, Finnish, and Latin. Czech was the hardest!",
    "I am a amateur <a href='https://photos.google.com/share/AF1QipNq88AUSSS3t5j1EPqC-zObzEAT9gjVjWI4KVkKX8vOpXrOnOZpPkMFpoZfmn6okg?key=LVR5MUNEbUI3ZDhqZ1Uzckt3Njl1ZXc1dk9MSXp3' target='_blank'>photographer</a>.",
    "I love darkroom photography.",
    "I do <a href='https://youtu.be/hhN3uhVHzvg?t=15m42s' target='_blank'>Swing Dance!</a>",
    "Check out my <a href='https://youtu.be/4zHSYzWrSJI?t=55m55s' target='_blank'>K-Pop performance</a>!",
    "My college application essay was published on <a href='https://cn.nytimes.com/education/20151216/t16essaycontest-tonyjin/en-us/' target='_blank'>The New York Times Chinese website</a>.",
    "I moved from an 8 million people city in China to a small town with 8,000 people in rural Vermont. And I loved it!",
    "I lived in Paris for six months.",
    "I speak fluent Chinese and French!",
    "I was an Oratory Coach during my freshman year in college.",
    "My favorite directors include Richard Linklater and Christopher Nolan.",
    "I am interested in Daoism and Buddhism."
  ];

  var randomFactIndex = Math.floor(Math.random() * funFacts.length);
  $('#preloader-title').text("Tony's Fun Fact #"+(randomFactIndex+1));
  $('#preloader-content').html(funFacts[randomFactIndex]);

  // $('#template-to-top').setAttribute("data-aos","fade-up");
  // $('#template-to-top').setAttribute("data-aos-duration","600");



  $( window ).on( "load", function() {
    preloaderFadeOutTime = 500;
    var preloader = $('.spinner-wrapper');
    preloader.animate({
      up:'40px',
      opacity:0
    },preloaderFadeOutTime);
    preloader.css("visibility","hidden");
    // fadeOut(preloaderFadeOutTime);
    AOS.init();
  });

  $(".highlight-link").each(function(){
        if ( $(this).isOnScreenHighlight() ) {
              $(this).addClass('shown');
            } else {
              $(this).removeClass('shown');
        }
  });

  var jumboHeight = $('.jumbotron').outerHeight();

  $(window).scroll(function(){

    // var scrolled = $(window).scrollTop();
    // console.log("Scrolled: "+scrolled);
    // $('.bg').css('height', (jumboHeight-scrolled) + 'px');

    $(".scroll-disappear").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 20);

    $(".highlight").each(function(){
    	    if ( $(this).isOnScreenHighlight() ) {
            $(this).addClass('shown');
    	        } else {
                  $(this).removeClass('shown');
    	    }
    });

    $(".highlight-link").each(function(){
          if ( $(this).isOnScreenHighlight() ) {
                  $(this).css("animation-delay","0s");
                  $(this).addClass('shown');
              } else {
                $(this).removeClass('shown');
          }
    });
  });




  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 160
  });

  // $("img[class*=\"img-responsive\"]").each(function(index,element) {
  //   console.log($(element).attr('class'));
  //   if ($(element).attr('class')!= 'img-responsive full-screen-img') {
  //     $(element).attr("data-action","zoom");
  //   }
  // });

  $('#template-to-top').hide();
  $(".bs-docs-sidebar").hide();

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


  var allLargeImgs = document.getElementsByClassName('full-screen-img');

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#template-to-top').fadeIn();
      // $('#template-to-top').attr("data-aos","fade-up");
      // $('#template-to-top').attr("data-aos-duration","600");



      // data-aos="fade-up" data-aos-duration="600"
    } else {
      $('#template-to-top').fadeOut();
    }

    if ($(this).scrollTop() > 600) {

      var hasLargeImg = false;

      Array.prototype.forEach.call(allLargeImgs, function(el) {
          // console.log(el);
          if (checkVisible(el)) {
            hasLargeImg = true;
          }
      });

      if (hasLargeImg) {
        $(".bs-docs-sidebar").fadeOut('slow');
      } else {
        $(".bs-docs-sidebar").fadeIn('slow');
      }
    }
    else {
        $(".bs-docs-sidebar").fadeOut("slow");
    }

    // if (checkVisible(testPic)) {
    //   $(".bs-docs-sidebar").fadeOut("slow");
    // } else {
    //   $(".bs-docs-sidebar").fadeIn('slow');
    // }


    // if (mq.matches) {
    //   if (window.location.pathname === '/html/home.html'){
    //     console.log('yes');
    //     if ($(this).scrollTop() > ($(window).height()*0.87-65)) {
    //       $('.navbar-nav-white').removeClass('navbar-nav-white');
    //       $('.navbar-brand-white').removeClass('navbar-brand-white');
    //       $('.hvr-underline-from-left-white').removeClass('hvr-underline-from-left-white');
    //     } else {
    //       $('.navbar-nav').addClass('navbar-nav-white');
    //       $('.navbar-brand').addClass('navbar-brand-white');
    //       $('.hvr-underline-from-left').addClass('hvr-underline-from-left-white');
    //     }
    //   }
    // }
  });



  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  //Click event to scroll to top
    $('#template-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });

    // $('.').addClass('load');


    $(".p-center-wrapper button[data-toggle='collapse']").click (function () {
      $(this).text(function(i,old){
        var newString = "";
        if (old.startsWith("See")) {
          newString = old.replace("See","Hide");
        } else if (old.startsWith("Hide")){
          newString = old.replace ("Hide","See");
        } else {
          newString = old;
        }
        return newString;
      });
    })
});



$.fn.isOnScreenHighlight = function(){

  // var fix = parseInt($(".navbar").css("height"));
  var win = $(window);

  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));

};