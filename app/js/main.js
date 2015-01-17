/*global $:false */
'use strict';

(function(){
  var s = skrollr.init();

  $('p img').each(function(){
    $(this).unwrap();
  });

})();