module('download_currencies', ['send_xhr_promise','wait_promise','download_text','log'], function(imports){
  var send_xhr_promise = imports[0]
  var wait_promise = imports[1]
  var download_text = imports[2]
  var log = imports[3]
  
  var arr=[]
  var i=10
  function loop(){
    xhr("http://openexchangerates.org/api/historical/2011-11-"+i+".json?app_id=8b525aa6b02e43699471e26e1933bdc6")
    .then(function(r){
      arr.push(r)
      log(r)
      return Promise.resolve()
    })
    .then(wait_promise(5000))
    .then(function(){
      i++
      if(i<20) loop()
      else download_text('currencies.txt',JSON.stringify(arr, 0, 2))
      return Promise.resolve()
    })
  }
})