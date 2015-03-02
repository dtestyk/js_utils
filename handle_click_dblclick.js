module('handle_click_dblclick', ['click_promise','wait_promise'], function(imports){
  var click_promise = imports[0]
  var wait_promise = imports[1]

  //return Promise.resolve(function handle(el, param){
  window.handle = function handle(el, h){
    click_promise(el)
    .then(function(){
      return Promise.race([
        wait_promise(700, 1),
        click_promise(el, 2)
      ])
    }).then(function(n){
      h(n)
      handle(el, h)
    })
  }.bind(this)
})