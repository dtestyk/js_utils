module('read_text_file_promise', [], function(imports){
	return Promise.resolve(function(file){
    return new Promise(function(resolve, reject){
      var reader = new FileReader();
      reader.onload = function(){resolve(reader)}
      reader.onerror = function(){reject(reader)}
      reader.readAsText(file);
    })
  })
})