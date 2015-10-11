module('load_iframe_promise', [], function(){
  return Promise.resolve(function(src, container){
    return new Promise(function(resolve, reject){
      var iframe = document.createElement('iframe')
      iframe.onload = function() { resolve(iframe)}
      iframe.onerror = function() { reject(iframe)}
      iframe.src = src
      container&&container.appendChild()
    })
  })
})