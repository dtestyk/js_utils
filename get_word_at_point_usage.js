module('get_word_at_point_usage', ['get_word_at_point'], function(imports){
  var get_word_at_point = imports[0]

  document.addEventListener('mousemove', function(e){
      var x = e.clientX
      var y = e.clientY
      //console.log(x,y)
      //var elem = document.elementFromPoint(x, y)
      //console.log(elem)
      var word = get_word_at_point(x, y)
      //console.log(word)
      if(word) console.log(word)
  }, false)
})