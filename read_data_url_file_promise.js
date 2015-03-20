module('read_data_url_file_promise', [], function(imports){
	return Promise.resolve(function(file){
    return new Promise(function(resolve, reject){
      var reader = new FileReader();
      reader.onload = function(){resolve(reader.result)}
      reader.onerror = function(){reject(reader.result)}
      reader.readAsDataURL(file);
    })
  })
})