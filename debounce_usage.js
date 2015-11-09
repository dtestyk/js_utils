module('debounce_usage', ['debounce'], function(imports){
  var debounce = imports[0]

  var mouse_move_handler = debounce(function() {
    console.log('stopped')
  }, 500);

  document.addEventListener('mousemove', mouse_move_handler);
})