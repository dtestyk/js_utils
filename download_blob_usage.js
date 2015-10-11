module('download_blob_usage', ['download_blob'], function(imports){
  var download_blob = imports[0]
  
  var data = { x: 42, s: "hello, world", d: new Date() };
  var json = JSON.stringify(data);
  var blob = new Blob([json], {type: "octet/stream"});
            
  download_blob('test.json', blob);
})