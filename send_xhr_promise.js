module('send_xhr_promise', [], function(imports){
  return Promise.resolve(function(url, params) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest()
      xhr.responseType = params&&params.responseType || xhr.responseType
      xhr.timeout = params&&params.timeout || xhr.timeout
      var method = params&&params.method || "GET"
      var data = params&&params.data
      var mime = params&&params.mime
      xhr.open(method, url)
      if(mime) xhr.overrideMimeType(mime)
      
      xhr.onload = function() {
          if (xhr.status === 200 || xhr.status === 204) {
              resolve(xhr)
          } else {
              reject(new Error(xhr.statusText))
          }
      }.bind(xhr)
      xhr.onerror = function() {
          reject(new Error("network error"))
      }
      xhr.ontimeout = function() {
          reject(new Error("network timeout"));
      }
      if(data) xhr.send(data)
      else xhr.send()
    })
  })
})