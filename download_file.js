module('download_file', [], function(imports){
    return Promise.resolve(function(url){
    var a = document.createElement('a')
    var name=url.split('/').pop()
    a.download = name
    a.href = url
    a.click()
    delete a
  })
})