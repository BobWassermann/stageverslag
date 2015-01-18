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