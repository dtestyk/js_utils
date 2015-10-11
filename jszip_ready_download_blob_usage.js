module('jszip_ready_download_blob_usage', ['jszip_ready', 'download_blob'], function(imports){
  var zip = imports[0]
  var download_blob = imports[1]
  
  zip.file("Hello.txt", "Hello World\n")
  var content = zip.generate({type:"blob"})

  download_blob('example.zip', content)
})