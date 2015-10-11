module('jszip_ready', [], function(imports){
  return new Promise(function(resolve, reject){
    //load_script_promise("http://stuk.github.io/jszip/dist/jszip.js")
    load_script_promise("https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.js")
    .then(function(){
      var zip = new JSZip();
      resolve(zip)
    })
  })
})