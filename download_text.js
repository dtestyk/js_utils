module('download_text', [], function(imports){
  return Promise.resolve(function(file_name, text){
    var a = document.createElement('a')
    a.download = file_name
    var oUrl = URL.createObjectURL(new Blob([text], {type: 'text/plain'}))
    a.href = oUrl
    a.click()
    delete a
    URL.revokeObjectURL(oUrl)
  })
})