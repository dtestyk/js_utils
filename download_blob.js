module('download_blob', [], function(imports){
    return Promise.resolve(function(name, blob){
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
    delete a
  })
})