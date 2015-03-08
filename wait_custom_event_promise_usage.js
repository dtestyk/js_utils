module('wait_custom_event_promise_usage', ['wait_custom_event_promise'], function(imports){
  var wait_promise = imports[0]
  wait_event_promise('test')
  .then(function(time) {
    console.log('first test event time: ' + time)
  })

  var test_event = new CustomEvent('test', { 'detail':  Date.now()})
  document.dispatchEvent(test_event)
})