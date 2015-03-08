module('click_promise_usage', ['click_promise'], function(imports){
  var click_promise = imports[0]
  function handle(){
    click_promise(document, 'clicked')
    .then(function(str){
      console.log(str)
      handle()
    })
  }
  handle()
})