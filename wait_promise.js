module('wait_promise', [], function(imports){
  return Promise.resolve(function(time, param){
    return new Promise(function(resolve, reject){
      setTimeout(function(param){
        resolve(param)
      }, time, param)
    })
  })
})