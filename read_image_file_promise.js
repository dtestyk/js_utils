module('read_image_file_promise', ['read_data_url_file_promise','load_image_promise'], function(imports){
  var read_data_url_file_promise = imports[0]
  var load_image_promise = imports[1]
  
	return Promise.resolve(function(file){
    return read_data_url_file_promise(file).then(load_image_promise)
  })
})