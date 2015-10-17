module('add_style_usage', ['add_style'], function(imports){
  var add_style = imports[0]
  add_style('html.waiting * {cursor: wait !important;}')

  var html=document.querySelector('html')
  html.classList.add("waiting");
})