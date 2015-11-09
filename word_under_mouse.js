module('get_word_at_point_usage', ['get_word_at_point','debounce'], function(imports){
  var get_word_at_point = imports[0]
  var debounce = imports[1]

  var mouse_move_handler = debounce(function(e){
      var x = e.clientX
      var y = e.clientY
      //console.log(x,y)
      //var elem = document.elementFromPoint(x, y)
      //console.log(elem)
      var word = get_word_at_point(x, y)
      //console.log(word)
      if(word) console.log(word)
  }, 500);

  document.addEventListener('mousemove', mouse_move_handler, false)
})