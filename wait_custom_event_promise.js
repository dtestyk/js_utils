module('wait_custom_event_promise', [], function(imports){
  return Promise.resolve(function(event_name){
    return new Promise(function(resolve, reject){
      document.addEventListener(event_name, function(e){
        document.removeEventListener(event_name, arguments.callee)
        resolve(e.detail)
      })
    })
  })
})