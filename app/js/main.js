'use strict';

(function(){
  var s = skrollr.init({
    mobileCheck: function() {
      return false;
    }
  });

  $('p img').each(function(){
    $(this).unwrap();
  });

})();

(function(){

  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var articleVisible = $('article').offset().top - ($(window).height() / 2);
    var articleEnd = articleVisible + $('article').height();

    if (scrollPos > articleVisible && scrollPos < articleEnd) {
      console.log($(this).index());
      $('nav ul li').eq(0).addClass('active');
    } else {
      $('nav ul li').removeClass('active');
    }
  });
  
})();