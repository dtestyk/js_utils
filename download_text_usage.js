module('download_text_usage', ['download_text'], function(imports){
  var download_text = imports[0]
  download_text('test.txt',JSON.stringify([25,,5,5,8,,8], 0, 2))
})