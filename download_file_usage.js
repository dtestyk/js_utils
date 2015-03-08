module('download_file_usage', ['download_file'], function(imports){
  var download_file = imports[0]
  download_file("http://www.pulsradio.com/pls/puls-adsl.m3u")
})