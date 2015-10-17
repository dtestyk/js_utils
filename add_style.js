module('add_style', [], function(){
  return Promise.resolve(function(style_line) {
    var style_element = document.getElementById('styles_js');
    if (!style_element) {
        style_element = document.createElement('style');
        style_element.type = 'text/css';
        style_element.id = 'styles_js';
        document.querySelector('head').appendChild(style_element);
    }
    style_element.appendChild(document.createTextNode(style_line));
  })
})