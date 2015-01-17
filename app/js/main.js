'use strict';

(function(skrollr, $){
  var s = skrollr.init();

  $('p img').each(function(){
    $(this).unwrap();
  });

})();