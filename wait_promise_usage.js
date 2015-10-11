module('wait_promise_usage', ['wait_promise'], function(imports){
  var wait_promise = imports[0]
  wait_promise(5000, "hello")
  .then(alert)
})